---
title: Report Management
description: A web app for care workers to manage their shifts and reporting.
date: '2024-11-24'
published: true
categories:
  - Business
  - Google Workspace
  - Apps Script
  - Sheets
  - Forms
  - Docs
  - automation
github: https://github.com/curtislmartin
---

Not complete

## Purpose

Capture and store recent shift reports in a secure and accessible manner.

## The Problem

Due to privacy and security concerns, staff don’t have access to the shift report database.

To provide high quality support, staff need access to information about the client and their recent support history.

## The Solution

### Part 1: Shift report form

Upon form submission, do a fuzzy match for the clients name against our database:

If there is no match put the shift report data into the next available row in the Shift Report Matcher sheet (2.) and send me an email about it.

If there is,

- Find the document in the clients folder in the staff accessible location. If there isn’t a folder, create one!
- Update the tables inside the document, keeping the 3 most recent shift reports in the first table and adding the staff entered tip to the start of the second table.
- Send the staff an email with the clients name and the shift date and time so they can keep track of the shift reports they have done.

### Part 2: Shift Note Matcher

User selects the name of the participant in the first column who the shift report is related to. Every 12 hours a function runs that does essentially the same process as in part 1 for each row with a shift report.

## Background

To comply with the NDIS provider standards and practices, NDIS Providers are required to create reports as evidence for each service booking.

These reports allow our staff and team leaders to see how each participant (client) is going, and maybe see trends which could suggest they are having a hard time or potential health issues, and gain info we can pass onto staff to better support and understand the participant.

Need to upload to github

### Resources

- [Sheet Report Matcher](https://example.com)

- [Docs Report Matcher](https://example.com)

- [Form Report Matcher](https://example.com)
