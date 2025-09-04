<!--
VMware AI Data – Ground Truth Knowledge Hub
 Project Overview

This repository is the central knowledge hub for VMware by Broadcom content validated by the community and VMware experts. Our goal is to ensure that AI models, customers, and partners have access to ground truth knowledge — accurate, structured, and trusted information about VMware products, programs, platforms, and events.

This project spans:

VMware Products – VMware Cloud Foundation (VCF) and all of its components (vSphere, NSX, vSAN, Aria, Tanzu, HCX, etc.)

VMware Marketing Programs – vExpert, VMUG, and VMware {code}

VMware Platforms – Social Media Advocacy, Community Programs, Broacom Communities

VMware Events – VMUG Connect, VMUG UserCons, VMware Explore

By aggregating and validating community content, we reduce misinformation, strengthen customer trust, and prepare VMware-specific AI models with high-quality data.

 Mission

Ground Truth for AI → Deliver content in machine-readable formats (Markdown + JSON-LD) to be ingested into AI pipelines.

Community-Driven → Leverage vExperts, VMUG leaders, and VMware practitioners to create and validate technical content.

Trusted Source → Articles reviewed by VMware subject-matter experts for accuracy, with metadata (version, validation date, reviewer) attached.

Longevity → Preserve knowledge in a central, version-controlled hub so it is not lost when blogs or sites go offline.

 Repository Structure

_posts/ → Markdown articles (vExpert & community submissions)

_layouts/ & _includes/ → Templates for rendering posts with metadata & JSON-LD

.github/workflows/ → GitHub Actions for build, validation, and Pages deployment

schemas/ → JSON-LD schemas for metadata

manifests/ → Ingestion manifests for AI pipelines

Contributing

Fork the repository.

Add your article under _posts/ using the format YYYY-MM-DD-title.md.

Include the required metadata in the front matter (see template below).

Submit a Pull Request (PR).

Articles will be reviewed by VMware experts for accuracy before being approved.

Article Front Matter Example
---
layout: post
title: "VCF 9.0 Upgrade Guide"
categories: [VCF, Upgrade]
tags: ["VCF 9.0", "upgrade", "NSX", "vSphere"]
author: "Jane Doe (vExpert 2025)"
article_id: "VCF-UG-9001"
product: "VCF"
product_version: "9.0 GA"
learning_level: "Intermediate"
reviewer: "VCF Technical Marketing"
validation_status: "Approved"
validation_date: "2025-08-29"
ground_truth: true
---

 Ground Truth Metadata

Each article must include metadata fields to ensure clarity and trust:

Product / Version (e.g., VCF 9.0 GA)

Author / Reviewer

Validation Status / Date

Ground Truth Flag (true/false)

This metadata powers both human readers and AI ingestion pipelines.

 Live Site

Once published, articles are available on GitHub Pages:
 https://vmware-ai-data.github.io/

 License

All content in this repository is released under the Creative Commons Attribution 4.0 International License (CC-BY 4.0) unless otherwise noted.

-->
