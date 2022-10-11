---
title: CV
layout: "base.njk"
eleventyNavigation:
  key: CV
---

# CV

Experience
----------

I’ve worked on infrastructure, platform, and product teams. In all the roles after college, I contributed to some sort of 24/7 pager rotation.

### **HubSpot, Senior Software Engineer II  
**_September 2021 - April 2022_

I worked as an individual contributor on the Application Platform team. This team was previously a catch-all team for Auth and Identity at HubSpot. Most the other teams in the group were spun out of App Platform, and shared systems typically were owned by the team. I joined to help the team with scalability issues coming from high scale and an aging codebase.

Some projects included

*   Adding functionality to migrate accounts, users, and permissions across data centers
    
*   Migrating the users and accounts service from an in-house data management framework with a _very_ deep class hierarchy made changes difficult and made caching and DAO behavior very opaque.
    
*   Solved long-standing GC issues with Users service
    
*   A lot of maintenance work like migrating integers to longs for MySQL tables reaching ID exhaustion
    

**HubSpot, Tech Lead  
**_January 2020 - September 2021_

I led the financial compliance team to build better automated coverage of financial systems and to rebuild critical systems failing under scale. The billing group was part of a different organizational structure until right before I boomeranged back to HubSpot. Along with technical efforts, I also helped to integrate the billing group into the larger Product organization at HubSpot. This primarily meant promoting ownership from engineering and encouraging domain experts to be involved in system building rather than either commandeering engineering with byzantine processes or sucking it up and using whatever tool they were given.

For my team, I either led, mentored, or was the primary contributor for the following:

*   Migrating a financial logging system off of a service-local MySQL approach to be gathered asynchronously by Kafka and aggregated in Athena
    
*   Setting up static analysis to flag potentially financially impactful code changes
    
*   Writing an automated inventory of repositories, endpoints, and teams that needed to fall in scope for financial regulations.
    
*   Rewriting a tool that automates comparing HubSpot’s financial data with complicated 3rd party systems like Zuora and NetSuite. We needed to rewrite it as it was built on an inflexible frontend off of HubSpot’s standard stack, making iteration off of analyst feedback impossible. It was also causing a massive amount of false positives leading to analyst burnout and unproductivity.
    

I also took on a billing group-wide leadership role to implement cross-datacenter support for billing systems. This involved coordinating a ~40-person engineering group, business system analysts, finance, and legal to implement systems, verify compliance and get feedback from domain experts to ensure we didn’t accidentally lose money or do something illegal. We managed to get the project done on schedule without losing any money or doing anything illegal.

### **HubSpot, Senior Software Engineer**

_October 2019 - January 2020_

This was basically time to embed on the team to learn the domain before taking over as Tech Lead.

* * *

### **Mapbox, Software Engineer**

_June 2019 - October 2020  
  
  
_I wasn’t at Mapbox long before being poached back to HubSpot. While there, I worked on a pipeline to import financial data from Stripe to be queryable through Athena on S3. I also aided in new SKU role out.

* * *

### **Squarespace, Software Engineer**

_March 2018 - May 2019  
  
  
_I was hired to work on the Core Infrastructure team, which ended up being a catch-all team for Squarespace’s infrastructure org. Some projects included

*   An internal URL shortener used throughout the company
    
*   Migrating off of Bind DNS to Power DNS
    
*   General infrastructure gardening, including cleaning up Ansible scripts and finding and solving a bug where credentials were being indexed in an internal ElasticSearch instance
    

Eventually, I moved to data infrastructure as part of a reorg since I had experience with Kafka

*   Setting up simple cross datacenter replication for Kafka
    
*   Log ingestion and configurable monitoring for Redis, RabbitMQ, Kafka, and Couchbase
    
*   Find and solved a longstanding performance issue with Couchbase that led to multi-second 99th response times
    

* * *

### **Astronomer.io, Software Engineer**

_June 2017 - February 2018  
  
_Astronomer was my first full-time job out of college. At the time, it was a seed-stage startup doing web analytics stuff but eventually pivoted to offering hosted Apache Airflow. While working there I

*   Setup initial Prometheus monitoring and dashboards
    
*   Migrated Kinesis workers to Kafka
    
*   Wrote the code to automate the creation of the data storage layer for Astronomer's initial hosted Apache Airflow offering  
      
    

* * *

### **RIT, Data mining Teaching Assistant**

_January 2016 - May 2017_

After taking Principles of Data Mining, I was offered a job as a teaching assistant. This meant a lot of grading, narking on cheaters, and running office hours for students to come in and ask questions.

* * *

### **RIT, Research Assistant**

_August 2015 - June 2016  
  
_I worked at RIT’s Computational Biomedical Laboratory working on heart arrhythmias. Work included converting Ph.D. students’ code from c++ to MatLab, assisting in coding statistical models, and scripting conversions between different data types for heart models.

* * *

### **Hubspot, Software Engineer Co-op**

_June 2016 - January 2017_

I worked on the data infrastructure team, with the focus of my coop being on HubSpot’s Apache Kafka instances handling millions of requests per second. By the end of the coop, I was one of the few coops to be on their team’s pager rotation. Some projects I worked on included:

*   Improving Ansible provisioning of Kafka to make new instance provisioning lower touch.
    
*   Worked around a bug in Kafka 0.8 where a feature to reset a consumer to a particular point-in-time would use the log file mtime rather than the time the log segment was produced to reset the offset. This led to the Kafka API resetting the offset to an earlier offset than intended in a sufficiently large Kafka deployment. Our system indexed Kafka message offsets in Hbase and their creation time.
    
*   A service that safely automated tasks like rolling restarts by using Monit to make API calls to instances while considering performance statistics and the state of the cluster
    
*   A framework lint MySQL queries for common mistakes. I could only partially get started on this before my internship ended.
    

* * *

### **iCitizen, Data Engineer Intern**

_June 2015 - August 2015  
  
_Built data visualization of voter campaign finance data to help voters better understand where a candidate’s funding comes from. I took data from its raw form, cleaned it, transformed it, and then visualized it. Other duties include writing scripts that are used to ingest voter file data into databases.

* * *

### **RIT, Research Computing Admin**

_March 2014 - May 2014  
  
_Maintained Linux systems used for researching the streaming of high-resolution video in a research environment.

* * *

### **IDI Billing, QA Automation Intern**

_June 2014 - December 2014  
  
_Designed and developed an in-house framework used for automated web GUI and web service testing. Logged application bugs and solved framework bugs


**Education**
-------------

### **Rochester Institute of Technology, Rochester, New York**

B.Sc COMPUTER SCIENCE, Cum Laude  
_Graduated 2017_

Awards
------

### AMA Datafest Best Use of Outside data 2017  
Dean’s List Spring 2016  
Dean’s List Spring 2015  
Dean’s List Fall 2013  
Dean’s List Spring 2013  
Freshman CS Chess AI Tournament 1st Place 2012  
National Honor Society 2011

Classwork
---------

Computer Graphics  
Intelligent Systems  
Functional Programming  
Data Mining and Statistics  
University Physics  
Linear Algebra  
Analysis of Algorithms  
Programming Language Theory