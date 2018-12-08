#!/bin/bash -e

################################################################################
# This program and the accompanying materials are made available under the terms of the
# Eclipse Public License v2.0 which accompanies this distribution, and is available at
# https://www.eclipse.org/legal/epl-v20.html
#
# SPDX-License-Identifier: EPL-2.0
#
# Copyright IBM Corporation 2018
################################################################################

################################################################################
# This script will
# - render ditamap
# - fix wrong links in md files
# - convert Markdown to CommonMark for dita-ot PDF generation
#
# References:
# - DITA Open Toolkit: https://www.dita-ot.org/
# - DITA XML: https://dita.xml.org/
# - CommonMark: https://commonmark.org/
################################################################################

################################################################################
# constants
################################################################################
SCRIPT_PATH=$(dirname "$0")
TMP_FOLDER=.deploy/.pdf-tmp
OUT_FOLDER=.deploy/.pdf-out
REPLACE_COMMAND=./node_modules/.bin/replace
DITA_MAP=Zowe_User_Guide.ditamap

################################################################################
# functions
################################################################################
function convert_md {
  FILE=$1

  echo "  - $FILE"

  # .html links are not appropriate
  $REPLACE_COMMAND '(\[[^\]]+\]\((?!https?://)[^\)]+)\.html\)' '$1.md)' $FILE
  $REPLACE_COMMAND '(\[[^\]]+\]\((?!https?://)[^\)]+)\.html(#[^\)]+)\)' '$1.md$2)' $FILE

  # table should not start with |
  $REPLACE_COMMAND '^\|\s*(\S.*\S)\s*\|$' '$1' $FILE
  # some table rows are missing ending |
  $REPLACE_COMMAND '^\|\s*(\S.*\S)\s*$' '$1' $FILE
}

################################################################################
echo "==============================================================================="
echo "Transform Markdown documents to CommonMark ..."
echo

################################################################################
# prepare folders
################################################################################
# make sure we are in the root folder of docs-site
cd $SCRIPT_PATH
cd ../../
DOCS_ROOT=$(pwd)
rm -fr $TMP_FOLDER
mkdir -p $TMP_FOLDER
rm -fr $OUT_FOLDER
mkdir -p $OUT_FOLDER
cp -r docs/* $TMP_FOLDER
# render ditamap from template and vuepress config
node docs/.pdf/generate-ditamap.js > $TMP_FOLDER/$DITA_MAP
echo "------------------------------------------------------------------------------"
echo "Temporary folder: $DOCS_ROOT/$TMP_FOLDER"
ls -la $TMP_FOLDER
echo

################################################################################
# transform to CommonMark
################################################################################
echo "------------------------------------------------------------------------------"
echo "Transform files:"
for F in $(find $TMP_FOLDER -name '*.md'); do
  convert_md $F
done
echo

################################################################################
# generate PDF
################################################################################
echo "------------------------------------------------------------------------------"
echo "Generating PDF ..."
docker run -v $DOCS_ROOT/$TMP_FOLDER:/opt/dita-ot/data \
  -v $DOCS_ROOT/$OUT_FOLDER:/opt/dita-ot/out \
  ditaot/dita-ot-base \
  dita -i /opt/dita-ot/data/Zowe_User_Guide.ditamap \
  -f pdf \
  -o /opt/dita-ot/out \
  -v
echo

################################################################################
# done
################################################################################
echo "------------------------------------------------------------------------------"
echo "DONE"
exit 0
