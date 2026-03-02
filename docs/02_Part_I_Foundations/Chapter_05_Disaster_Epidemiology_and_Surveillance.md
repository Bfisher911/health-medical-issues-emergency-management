# Chapter 5: Disaster Epidemiology and Surveillance

---

## Chapter Overview

Every disaster produces a health data problem. Hospitals fill, calls pour into poison control centers, death certificates accumulate, and social media lights up with reports of illness and injury — yet decision-makers often lack the synthesized, timely, actionable information they need to direct resources, assess scale, and detect emerging secondary threats. Disaster epidemiology is the discipline that bridges the gap between raw health data and operational intelligence.

This chapter introduces the core concepts and methods of disaster epidemiology, with particular attention to their application in emergency operations settings where speed and practicality matter as much as methodological rigor. It examines the major surveillance systems that public health agencies use before, during, and after disasters; the specific epidemiological challenges that disasters create; and the ethical dimensions of conducting surveillance in communities that have just experienced trauma. The chapter also addresses the integration of behavioral and mental health surveillance into disaster health monitoring — a domain that has historically been underrepresented in emergency health data systems.

Emergency managers are not epidemiologists, but they are consumers and commissioners of epidemiological work. Understanding how disaster health data is generated, what it can and cannot tell you, and how surveillance system failures occur prepares practitioners to ask better questions, demand better products, and avoid decisions based on data they do not actually have.

---

## Learning Objectives

Upon completing this chapter, the reader will be able to:

1. Define disaster epidemiology and explain its role in emergency response and recovery.
2. Describe the major categories of health impact associated with natural, technological, and complex disasters.
3. Identify the primary surveillance systems used in disaster public health monitoring, including their data sources, strengths, and limitations.
4. Explain the epidemiological concepts of incubation period, attack rate, case fatality rate, and excess mortality and apply them to disaster scenarios.
5. Describe syndromic surveillance and its operational utility during disaster response.
6. Address the ethical considerations associated with disaster surveillance, including privacy, community consent, and data use.
7. Articulate how surveillance data should inform operational decision-making during an active emergency response.

---

## 5.1 What Disaster Epidemiology Is and Why It Matters

Epidemiology is the study of the distribution and determinants of health-related states and events in specified populations, and the application of that study to control health problems [CITATION: Gordis epidemiology definition]. In the disaster context, the "specified population" has just been subjected to an acute, large-scale disruption that simultaneously increases health risk, disrupts healthcare infrastructure, displaces people from their usual health information environments, and degrades the administrative systems that normally generate health data.

Disaster epidemiology asks: What has happened to the health of this population? Who is sick, injured, or dead, and where? What caused those health outcomes, and are new causes emerging? Which populations are most severely affected? Are response interventions working? What additional threats are likely to emerge in the coming days, weeks, and months?

These are not purely scientific questions. They are operational questions. The answers inform where to send search and rescue teams, where to position medical surge capacity, when to issue a boil water advisory, whether to extend a shelter operation, and how to allocate scarce countermeasures. Disaster epidemiology practiced well shortens the gap between what is happening in the field and what decision-makers understand.

Disaster epidemiology practiced poorly — or not at all — leaves commanders making decisions based on anecdote, assumption, and the accounts of whoever happened to call most recently. In the worst cases, health threats are missed entirely until they produce catastrophic outcomes.

### 5.1.1 A Brief Disciplinary History

Formal disaster epidemiology developed in part from military medicine and in part from the international public health response to large-scale famines and refugee crises in the 1970s and 1980s, where practitioners found that crude mortality rates could serve as a rapid-assessment indicator of crisis severity and response adequacy [CITATION: Toole and Waldman emergency relief epidemiology]. In the United States, the field grew through CDC's Centers for Injury Prevention and through the post-Katrina recognition that federal public health agencies lacked the operational epidemiology surge capacity needed during large-scale domestic disasters [CITATION: Institute of Medicine post-Katrina public health review].

Today, disaster epidemiology is embedded in state and local health department emergency operations through Epidemiology and Laboratory Capacity (ELC) cooperative agreements, the Epi Aid and Epi-X rapid response systems at CDC, and through the Applied Epidemiology Fellowship programs that place field epidemiologists in state and local agencies. The Strategic National Stockpile and public health emergency preparedness grant programs fund the surveillance and epidemiology workforce at the state level [CITATION: CDC PHEP cooperative agreement program].

---

## 5.2 Categories of Disaster Health Impact

Disasters produce health effects across four primary categories, each requiring distinct surveillance and response strategies.

### 5.2.1 Direct Effects: Trauma and Acute Illness

Direct health effects result from the physical forces of the disaster event itself — the crush injury from structural collapse, the burn from wildfire, the blast injury from an explosion, the drowning from flood, the acute carbon monoxide poisoning from a toxic release. These effects are most intense in the immediate post-impact phase and are the focus of emergency medical services (EMS), trauma surgery, and mass casualty management.

Surveillance of direct effects relies on emergency department (ED) data, EMS call data, trauma registry reports, and disaster morgue records. The challenge in mass casualty events is that standard administrative data systems — designed for routine operations — are overwhelmed or interrupted precisely when surveillance is most needed. Paper-based victim tracking systems, disaster-specific electronic tracking tools such as those built on the EDXL-DE standard, and the Electronic Death Registration System all play roles in direct-effects surveillance [CITATION: EDXL and disaster patient tracking standards].

### 5.2.2 Indirect Effects: Infrastructure Disruption and Access Failure

Indirect health effects arise not from the disaster forces themselves but from the disruption of the infrastructure and systems that normally sustain health. Power outages disable home medical equipment, disrupt refrigerated medication storage, and interrupt dialysis and infusion therapy. Water system damage triggers gastrointestinal illness from contaminated water and dehydration when water is unavailable. Transportation disruption prevents access to emergency care, primary care, and pharmacy services. Healthcare facility damage or closure creates care gaps for patients with complex chronic disease management needs.

Indirect effects often exceed direct effects in total mortality during major disasters. The excess mortality analysis performed after major hurricanes — calculating the difference between observed deaths during and after the disaster and expected deaths based on historical patterns — has consistently documented that indirect deaths, including delayed care deaths among patients with cardiovascular disease, cancer, and renal failure, constitute a substantial majority of total disaster mortality [CITATION: excess mortality hurricane research].

### 5.2.3 Secondary Effects: Infectious Disease and Environmental Contamination

Secondary health effects emerge in the days, weeks, and months following a disaster, driven by population displacement, infrastructure damage, and the altered physical environment. Infectious disease transmission increases when displacement concentrates people in shelters or temporary housing with inadequate sanitation; when water treatment is disrupted; when vector control programs are interrupted; and when populations are immunologically naive to endemic pathogens in unfamiliar locations.

Specific infectious disease threats associated with different disaster types include: wound infections and leptospirosis following flooding; respiratory illness outbreaks in shelters; foodborne illness from power-outage-related food spoilage; hepatitis A in communities with disrupted water and sanitation; and vector-borne diseases (West Nile, dengue, malaria in endemic areas) when standing water creates mosquito breeding sites [CITATION: WHO infectious disease after natural disasters guide].

Environmental contamination — from industrial facility damage, agricultural chemical release, fuel spills, and building debris — creates secondary exposure pathways for chemical toxics. Surveillance for secondary environmental health effects requires coordination between public health and environmental agencies, and often involves community biomonitoring programs that assess exposure through blood and urine sampling.

### 5.2.4 Tertiary Effects: Behavioral Health and Chronic Disease Sequelae

Tertiary health effects are the long-term consequences that persist and accumulate in disaster-affected communities over months and years. These include post-traumatic stress disorder (PTSD), major depression, substance use disorders, complicated grief, relationship dysfunction, and prolonged social isolation. They also include the acceleration of chronic disease progression in populations whose disease management was disrupted by the disaster — the diabetic patient whose glycemic control deteriorated during displacement, the hypertensive patient who ran out of medications, the cancer patient whose treatment was delayed.

Tertiary effects receive the least attention in disaster health surveillance, in part because they emerge slowly, are causally complex, and require data linkage between disaster exposure data and long-term health records. Yet they represent a substantial and documentable burden of disaster health impact. Community-level PTSD prevalence surveys conducted after major disasters consistently document elevated rates [CITATION: post-disaster PTSD prevalence literature], and the behavioral health surge in affected communities places long-term pressure on healthcare systems that is not fully captured in acute response metrics.

Chapter 6 addresses behavioral health in disasters in detail. This chapter focuses primarily on the surveillance infrastructure for tracking acute and subacute health effects.

---

## 5.3 Surveillance Systems in Disaster Public Health

Public health surveillance is defined as the ongoing, systematic collection, analysis, interpretation, and dissemination of health data, with the purpose of planning, implementing, and evaluating public health interventions [CITATION: CDC surveillance definition]. Disaster surveillance applies this definition to the acute and evolving health situation in a disaster-affected population.

### 5.3.1 Syndromic Surveillance

Syndromic surveillance systems collect near-real-time data on health indicators — emergency department chief complaints, over-the-counter pharmaceutical sales, school absenteeism, and EMS call volume — to detect anomalies that might signal an emerging health threat before clinical diagnoses are confirmed [CITATION: syndromic surveillance development and applications].

The primary national platform for syndromic surveillance in the United States is BioSense, operated by CDC's Center for Preparedness and Response. State and local health departments access BioSense-platform data through the Electronic Surveillance System for the Early Notification of Community-based Epidemics (ESSENCE) and similar state-based platforms. These systems ingest emergency department data — sent electronically by participating hospitals — and apply algorithms that flag unusual clustering of syndromes such as respiratory illness, gastrointestinal illness, heat-related illness, and injury-related chief complaints [CITATION: BioSense/ESSENCE documentation].

During disaster response, syndromic surveillance serves several functions: detecting infectious disease outbreaks in shelter populations before they become widespread; monitoring for chemical exposure presentations that might indicate an undisclosed toxic release; tracking heat illness during extended heat events to guide shelter and cooling center placement; and providing near-real-time situational awareness about ED utilization to guide surge management.

Syndromic surveillance has well-documented limitations. It is not diagnostic: it detects patterns in pre-clinical data that require epidemiological follow-up and laboratory confirmation before conclusions can be drawn. It depends on electronic data submission from participating facilities, which may fail precisely during disasters when IT systems are stressed. It is sensitive to changes in healthcare-seeking behavior — people who shelter in place rather than presenting to emergency departments will not appear in ED-based surveillance data, creating undercounting bias.

### 5.3.2 Shelter and Displaced Population Surveillance

When mass displacement produces large shelter populations, those shelters become surveillance settings. Shelter-based surveillance typically uses standardized health intake forms administered at registration, daily illness reporting by shelter medical staff, and periodic active case finding for high-priority syndromes.

The Red Cross National Shelter System tracks shelter census and basic demographic data; health agencies can request data linkages for public health surveillance purposes. State and local health departments may deploy field epidemiologists or epidemiology response teams to large shelter sites to conduct active surveillance and manage outbreak investigations.

Shelter surveillance faces the challenge of representativeness: the population in shelters is not a random sample of disaster-affected people. It tends to overrepresent people without vehicles, people without social networks capable of providing informal housing, people with high medical needs who cannot manage at home, and people who are newly aware of available services. These are important populations to monitor — and their needs may differ substantially from the general disaster-affected community.

### 5.3.3 Mortality Surveillance and Disaster Death Investigation

Accurate disaster mortality counts are essential for assessing response adequacy, allocating recovery resources, identifying preventable deaths, and establishing historical records. They are also among the most technically and politically contested areas of disaster epidemiology.

Direct disaster deaths — those caused by the physical forces of the disaster — are the most visible and easiest to count, though even they present classification challenges when cause of death is ambiguous. Indirect and delayed disaster deaths require methodological approaches that go beyond simple case counting: the excess mortality method, which compares observed to expected deaths over a defined period and geography, is the most widely used approach for estimating total disaster mortality [CITATION: excess mortality estimation methods].

The excess mortality approach was applied after Hurricane Maria in Puerto Rico in 2017, producing estimates of excess deaths that were substantially larger than official government counts — a discrepancy with significant political and policy implications [CITATION: Hurricane Maria mortality studies]. This example illustrates the tension between administrative mortality counts, which are definitive but likely underestimate true disaster mortality, and statistical excess mortality estimates, which capture a broader causal scope but carry inherent uncertainty.

The Disaster Mortality Analysis Surveillance System (DMASS) and similar state-level mortality surveillance tools aim to standardize disaster death investigation protocols. Medical examiners and coroners play a critical role in this system — a role that requires pre-disaster coordination with emergency management agencies, planning for mass fatality management capacity, and clear protocols for disaster-related death certification [CITATION: DMASS documentation].

### 5.3.4 Environmental and Exposure Surveillance

Chemical, biological, radiological, and nuclear (CBRN) events require specialized exposure surveillance that integrates environmental monitoring — air sampling, water testing, soil analysis — with human biomonitoring, clinical surveillance, and toxicology data. State environmental agencies and EPA regional offices typically lead environmental monitoring; health departments lead the human health surveillance component; and integration requires functional coordination mechanisms that should be established in pre-disaster planning, not improvised during response.

The National Exposure Registry, maintained by ATSDR, and various state-level exposure registries provide platforms for long-term follow-up of populations exposed to toxic substances during disasters and industrial incidents. Long-term community health studies — such as those conducted in communities affected by the Deepwater Horizon oil spill — demonstrate that toxic disaster exposures produce health effects that extend years beyond the acute event and require sustained surveillance infrastructure [CITATION: ATSDR Deepwater Horizon community health studies].

---

## 5.4 Key Epidemiological Measures in Disaster Settings

Several standard epidemiological measures take on specific operational significance in disaster contexts.

**Attack rate**: The proportion of an at-risk population that develops a specified illness or condition during a defined period. During a shelter outbreak, the attack rate among shelter residents quantifies outbreak severity and helps estimate resources needed for case management [CITATION: attack rate definition].

**Case fatality rate (CFR)**: The proportion of individuals with a specified illness or condition who die from it. CFR is a critical indicator in infectious disease events and is used to monitor healthcare system capacity — a rising CFR during a surge may indicate that the system is failing to provide adequate care, not only that the pathogen is more lethal.

**Excess mortality**: The difference between observed deaths in a disaster-affected population during a specified period and the deaths that would have been expected based on historical rates. Excess mortality captures indirect and delayed disaster deaths that administrative counts miss.

**Incubation period**: The time between exposure to an infectious agent and onset of symptoms. Knowledge of incubation periods for priority pathogens guides the timing of surveillance intensification, prophylaxis distribution, and shelter quarantine decisions. A norovirus outbreak in a shelter, with its 24-48 hour incubation period, calls for different timing and intensity of intervention than a hepatitis A outbreak, with its 15-50 day incubation period [CITATION: CDC incubation period reference data].

**Relative risk and odds ratio**: Measures of association between an exposure and a health outcome. Rapid epidemiological investigations during disaster-associated outbreaks use these measures to identify the source of infection or contamination, guiding control measures.

**Crude mortality rate (CMR)**: In refugee and displaced population settings, CMR is used as a global indicator of population health emergency severity. A CMR above [DATA: international threshold] per 10,000 per day has historically been used to signal emergency conditions requiring intensified humanitarian response [CITATION: emergency refugee CMR thresholds].

---

## 5.5 Rapid Needs Assessment Methods

When standard surveillance data systems are disrupted or unavailable — which is common in the acute post-impact phase of major disasters — rapid needs assessment methods provide a bridge between the absence of data and the need for operational intelligence.

The most widely used rapid needs assessment method in emergency settings is the cluster survey, a multistage sampling approach adapted from the WHO Expanded Programme on Immunization survey methodology [CITATION: WHO cluster survey methodology]. Cluster surveys can be implemented within days of a disaster using a small field team and minimal resources, producing population-level estimates of mortality, injury, displacement, and shelter and food security within defined confidence intervals.

Rapid community assessments, conducted through structured key informant interviews with community leaders, healthcare providers, shelter managers, and community organization staff, provide qualitative intelligence on population health needs, service gaps, and emerging threats in a compressed timeframe. While not statistically representative, key informant data rapidly surfaces contextual information that quantitative surveillance systems are slow to produce.

Post-disaster household surveys, which require more time and resources than rapid assessments but produce more robust estimates, are typically conducted in the weeks following major disasters and inform recovery planning rather than immediate response.

---

## 5.6 Surveillance System Failures: Lessons and Patterns

Disaster surveillance fails in characteristic ways that practitioners can anticipate and mitigate.

**Infrastructure dependency failures**: Surveillance systems that depend on electronic data submission, internet connectivity, or specific hardware fail when infrastructure is disrupted. Resilient surveillance designs include offline data collection tools with manual entry capability, alternative data transmission pathways (satellite communication, radio reporting), and pre-identified field data collection protocols.

**Coverage gaps in displaced populations**: People who evacuate to family and friends rather than official shelters, people sheltering in vehicles or informal encampments, and people who self-relocate across jurisdictional boundaries are systematically missed by facility-based and shelter-based surveillance. Estimating the size and location of self-evacuated populations requires alternative data sources — utility disconnection records, traffic counts, cellular mobility data — that require pre-disaster data-sharing agreements.

**Inter-jurisdictional data sharing barriers**: Disasters rarely respect jurisdictional boundaries, but surveillance data systems are typically organized by jurisdiction. Cross-jurisdictional data sharing requires pre-established agreements, compatible data standards, and designated liaison roles between agencies. Absence of these mechanisms produces intelligence gaps at the boundaries of jurisdictions precisely where displaced populations concentrate.

**Health equity blind spots**: Standard surveillance systems may undercount health impacts in communities with limited healthcare access, communities where people do not seek care from official health system providers, and communities where language or documentation barriers reduce engagement with health services. Equity-focused surveillance design requires active outreach, community health worker-based data collection, and deliberate attention to populations that are invisible to facility-based reporting systems.

---

## Applied Vignette: Tracking the Invisible Outbreak

*Note: The following scenario is illustrative. All names and details are fictional.*

Twelve days after a major hurricane, a regional emergency operations center is coordinating shelter operations for approximately [DATA: large shelter population number] displaced persons across [DATA: number] shelter sites. The health desk is staffed by a public health epidemiologist on loan from the state health department.

Day 13: A shelter nurse at the largest site calls to report that six residents have had vomiting and diarrhea in the past 24 hours. The epidemiologist asks for a line list — name, age, shelter arrival date, symptoms, onset date, meal history. The nurse says they'll try to pull it together.

Day 14: The state syndromic surveillance system shows a modest increase in gastrointestinal syndrome presentations at the one emergency department serving the shelter area. It is not flagged as anomalous because the baseline is calculated from pre-disaster historical data for that facility, and the facility's overall volume is lower than pre-disaster because it is not at full capacity.

Day 15: The epidemiologist calls the shelter directly and learns that the nurse's count is now 23 cases. She asks the shelter manager to implement contact precautions, activate their sick bay, and stop communal meal service pending investigation. The shelter manager says they have no sick bay capacity and communal meals are the only distribution mechanism.

Day 16: A rapid investigation using a two-question symptom screen administered at morning meal identifies [DATA: higher case count] symptomatic individuals. Stool samples are collected and sent to the state lab. Preliminary epidemiological evidence — onset clustering, incubation period consistent with [DATA: 24-48 hours], and a food exposure association from a brief case-control analysis — suggests norovirus transmitted through a contaminated meal service.

The shelter switches to pre-packaged individual meal distribution, implements enhanced hand hygiene stations, and isolates symptomatic individuals in a designated area improvised from storage space. The outbreak peaks at [DATA: peak case count] cases and resolves over [DATA: days].

**Lessons illustrated**: Facility-based syndromic surveillance missed the outbreak because the denominator was facility visits, not shelter population. The outbreak was detected through direct relationship and informal reporting. The investigation was constrained by lack of pre-established isolation capacity. Response was delayed by the absence of pre-planned shelter outbreak management protocols.

---

## Key Terms

**Attack rate**: The proportion of an exposed or at-risk population that develops a disease or condition within a specified period.

**Cluster survey**: A multistage probability sampling method used to estimate population health parameters in settings where complete enumeration is impossible.

**Crude mortality rate (CMR)**: The number of deaths per unit population per unit time; used in humanitarian settings as an indicator of emergency severity.

**Excess mortality**: The difference between observed deaths and expected deaths (based on historical rates) during a specified period in a disaster-affected population.

**Incubation period**: The time interval between infection with an agent and onset of disease signs or symptoms.

**Rapid needs assessment**: A structured, time-compressed evaluation of a disaster-affected population's health status, needs, and available resources.

**Syndromic surveillance**: Near-real-time health data collection and analysis focused on clinical indicators (syndromes) rather than confirmed diagnoses, used for early detection of health threats.

**Surveillance sensitivity**: The proportion of true cases or events that are captured by a surveillance system; a measure of completeness.

---

## Discussion Questions

1. The chapter distinguishes direct, indirect, secondary, and tertiary disaster health effects. How should the relative weighting of these categories influence the design of a disaster health monitoring system? Which category is most commonly undermonitored, and why?

2. Syndromic surveillance was developed with the explicit goal of detecting bioterrorism events early. How well does that goal align with the surveillance needs identified in this chapter? What adaptations would make syndromic surveillance more useful across the full spectrum of disaster types?

3. The Hurricane Maria mortality controversy illustrates the gap between administrative death counts and excess mortality estimates. Who should have the authority to define the official death toll for a declared disaster, and what process should produce that determination?

4. What are the ethical obligations of public health surveillance practitioners when collecting health data from disaster-affected communities that have not provided individual informed consent for data collection? How do you balance the public health need for rapid data with individual privacy rights?

5. How should the results of disaster surveillance be communicated to the public? What information should be released promptly, and what should be withheld pending confirmation — and who decides?

---

## Scenario Exercise: Designing a Shelter Surveillance System

A major regional earthquake has displaced an estimated [DATA: number] people from a metropolitan area. Emergency shelters are operating at [DATA: number] sites, ranging in capacity from [DATA: small number] to [DATA: large number] individuals. The affected jurisdiction has a significant population of older adults, a large number of individuals on home medical equipment, and a community that includes substantial numbers of monolingual Spanish and Vietnamese speakers.

**Your tasks**:

1. Design a basic shelter surveillance system that would function in the first 72 hours without reliance on electronic data systems. Specify data elements to collect, data collection method, reporting interval, and alert thresholds.

2. Identify the surveillance gaps your system would have and propose compensating measures.

3. Develop a one-page illness reporting card in plain language suitable for distribution to shelter residents. What information does it ask for, and what language access accommodations would you build in?

4. Describe how you would investigate an outbreak of febrile respiratory illness affecting residents at three shelter sites. What data would you need, what hypotheses would you test, and what control measures would you recommend before laboratory results are available?

5. Draft a 24-hour surveillance report template that a field epidemiologist could complete rapidly and transmit to the EOC health desk.

---

## Practitioner Takeaways

**Invest in surveillance infrastructure before disasters.** Data-sharing agreements with hospitals, EMS agencies, and shelters; pre-established offline data collection protocols; and trained field epidemiology teams are surveillance assets that only work if they exist before the disaster. They cannot be improvised during response.

**Know your systems' blind spots.** Every surveillance system has coverage gaps. Facility-based systems miss people not seeking care. Shelter-based systems miss people in informal housing. Agency-based systems miss inter-jurisdictional movements. Good surveillance practice acknowledges these gaps, estimates their magnitude, and designs compensating data collection approaches.

**Use excess mortality as a completeness check.** After major disasters, perform an excess mortality analysis to assess whether administrative death counts are capturing total disaster mortality. Significant excess mortality not reflected in administrative counts signals a documentation failure with resource allocation implications.

**Behavioral and mental health surveillance belongs in the system.** Mental health impact is routinely undercounted in disaster surveillance because it is not captured in acute care systems, emerges on a delayed timeline, and is stigmatized. Dedicated behavioral health surveillance — whether through shelter-based screening, community surveys, or healthcare system monitoring — requires deliberate investment.

**Communicate uncertainty honestly.** Surveillance data during disasters is always preliminary, incomplete, and subject to revision. Decision-makers need to understand the confidence level of the data they are using. Communicate what is known, what is uncertain, and what data would resolve the uncertainty.

---

## References

[CITATION: CDC definition of public health surveillance.]
[CITATION: Toole M.J. & Waldman R.J. Refugees and displaced persons: War, hunger, and public health.]
[CITATION: Noji E.K. (Ed.) The Public Health Consequences of Disasters.]
[CITATION: Lillibridge S.R. & Noji E.K. Disaster epidemiology: A conceptual overview.]
[CITATION: Bern C. et al. Assessment of non-fatal injuries after a large earthquake.]
[CITATION: Malilay J. et al. The role of applied epidemiology methods in the disaster management cycle.]
[CITATION: CDC BioSense platform documentation.]
[CITATION: WHO Health action in crises: Rapid health assessment.]
[CITATION: Lozano R. et al. Excess mortality estimation methods in disaster contexts.]
[CITATION: Santos-Burgoa C. et al. Differential and persistent risk of excess mortality from Hurricane Maria in Puerto Rico.]
[CITATION: ATSDR National Exposure Registry documentation.]
[CITATION: CDC cluster survey methodology documentation.]
[CITATION: FEMA National Disaster Recovery Framework health data guidance.]

---

## Chapter Notes

**On excess mortality and Hurricane Maria**: The controversy over Puerto Rico's official death toll from Hurricane Maria, and the subsequent peer-reviewed studies estimating substantially higher excess mortality, became a significant public health policy issue. The experience contributed to federal investment in improved disaster mortality surveillance methodology and highlighted the political dimensions of official death counts.

**On behavioral health surveillance**: Dedicated post-disaster behavioral health surveillance remains an underresourced area in most jurisdictions. The most comprehensive behavioral health surveillance systems associated with major U.S. disasters have typically been federally funded research projects rather than routine public health surveillance operations.

**On syndromic surveillance and COVID-19**: The COVID-19 pandemic accelerated investment in syndromic surveillance infrastructure and demonstrated both its utility — early detection of COVID-like illness trends — and its limitations — initial absence of specific COVID-19 syndromes in surveillance algorithms.

**Cross-references**: Chapter 4 addresses the equity dimensions of surveillance coverage gaps. Chapter 6 extends behavioral health surveillance concepts. Chapter 9 addresses Crisis Standards of Care, which depend on accurate surveillance data for activation decisions. Chapter 17 addresses infectious disease outbreak surveillance in detail.

---

*End of Chapter 5*
