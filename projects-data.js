/**
 * ═══════════════════════════════════════════════════════════════
 *  DIPESH PATEL — SHARED PROJECT DATA
 *  Edit this ONE file to update BOTH the home page and project pages
 *  automatically. Add a new project object to add it everywhere.
 * ═══════════════════════════════════════════════════════════════
 *
 *  Each project has:
 *   id, num        → unique identifier & display number (must match)
 *   cat            → category key used for filtering on home page
 *                    options: 'microsoft' | 'infrastructure' | 'cybersecurity' | 'networking'
 *   catLabel       → human-readable category shown on project page hero
 *   status         → 'live' | 'wip'
 *   statusLabel    → 'Live' | 'In Progress'
 *   name           → project title (shown on both pages)
 *   desc           → short description (shown on home page card)
 *   tagline        → slightly longer subtitle (shown on project page hero)
 *   tech           → array of tech tags (home page card footer + project page tech bar)
 *   icon           → SVG path(s) for the card icon on home page
 *   link           → external link (GitHub etc.) — '#' if none
 *
 *   -- PROJECT PAGE ONLY --
 *   meta           → array of {label, val, cls?} shown in hero meta row
 *   overview       → array of paragraph strings for Overview section
 *   steps          → array of {title, desc, code?} for Process & Steps
 *   outcomes       → array of outcome strings (used internally — extend if needed)
 *
 *   screenshots    → object mapping step index (0-based) to image path/URL
 *                    e.g. { 0: 'screenshots/proj01/step1.png', 2: 'screenshots/proj01/step3.png' }
 *                    Steps without an entry show a neutral "No screenshot" placeholder.
 *                    Images are displayed with object-fit:contain — nothing is cropped,
 *                    the image scales to fit the 16:9 box automatically.
 */

const PROJECTS = [
  // ─────────────────────────────────────────────────────────────
  {
    id:'01', num:'01',
    cat:'microsoft', catLabel:'Microsoft 365 & Endpoint',
    status:'live', statusLabel:'Live',
    name:'Hybrid IT Infrastructure Lab',
    desc:'Enterprise-level simulation of a hybrid IT environment covering on-prem AD, Azure AD Connect, Intune policy deployment, and Autopilot provisioning — built to mirror real-world enterprise architecture.',
    tagline:'A full hybrid enterprise reference architecture — on-prem Active Directory synced to Entra ID via AD Connect, with zero-touch Autopilot provisioning and Intune policy enforcement end-to-end.',
    tech:['Azure AD','Microsoft Intune','Windows Autopilot','AD Connect','SCCM','PowerShell'],
    icon:'<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
    link:'https://github.com/Pate1Dipesh/HybridIT-Infrastructure-Lab-EnterpriseLevel-Simulation',
    meta:[
      {label:'Type', val:'Personal Lab Project'},
      {label:'Duration', val:'3 Months'},
      {label:'Environment', val:'Hybrid (On-Prem + Cloud)', cls:'blue'},
      {label:'Status', val:'Completed', cls:'green'},
    ],
    overview:[
      'This project simulates a real-world hybrid enterprise IT environment, integrating on-premises Active Directory with Microsoft Entra ID (Azure AD) via Azure AD Connect. The goal was to build a reference architecture that mirrors what modern organisations use for identity management, device provisioning, and endpoint security.',
      'The lab covers the full device lifecycle — from bare-metal Windows installation and domain join, through Autopilot zero-touch provisioning, to Intune compliance policy enforcement and conditional access. All configurations were documented with step-by-step runbooks for repeatability.',
      'This project was built to sharpen real-world skills in Microsoft Modern Workplace technologies and serves as a reference architecture for enterprise deployments in my day-to-day role.',
    ],
    steps:[
      {title:'Set Up On-Premises Active Directory', desc:'Deployed Windows Server VM, promoted to Domain Controller, configured DNS, created OUs, user accounts, and group policies for the simulated organisation.', code:'Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools\nInstall-ADDSForest -DomainName "lab.dipeshpatel.ca"'},
      {title:'Configure Azure AD Connect', desc:'Installed and configured Azure AD Connect for hybrid identity sync between on-prem AD and Entra ID. Set up password hash sync, filtered OUs, and verified user objects appeared in the cloud.', code:null},
      {title:'Set Up Intune & Autopilot', desc:'Configured Intune tenant, created device enrolment profiles, built Windows Autopilot deployment profile with OOBE customisation, ESP configuration, and Entra ID join settings.', code:'# Extract hardware hash for Autopilot registration\nGet-WindowsAutoPilotInfo -OutputFile AutoPilotHWID.csv'},
      {title:'Deploy Compliance & Configuration Policies', desc:'Built device compliance policies (BitLocker, Defender, password requirements), configuration profiles (Wi-Fi, VPN, restrictions), and app protection policies for MAM on mobile.', code:null},
      {title:'Test & Validate End-to-End', desc:'Performed full provisioning cycle from factory-reset device through Autopilot, verified all policies applied, tested conditional access scenarios, and documented results.', code:null},
    ],
    outcomes:['Zero-touch provisioning under 30 minutes','Hybrid identity sync with no errors','All compliance policies enforced on enrolment','Conditional Access blocking non-compliant devices','Full runbook documented'],
    // screenshots: map step index (0-based) → image path relative to site root
    // e.g. { 0: 'screenshots/proj01/step1.png', 1: 'screenshots/proj01/step2.png' }
    screenshots: {},
  },
  // ─────────────────────────────────────────────────────────────
  {
    id:'02', num:'02',
    cat:'microsoft', catLabel:'Microsoft 365 & Endpoint',
    status:'live', statusLabel:'Live',
    name:'Intune MDM/MAM Policy Framework',
    desc:'Designed and deployed a comprehensive Intune device compliance and app protection policy framework for Windows, iOS, and Android endpoints — enforcing Zero Trust and conditional access across all devices.',
    tagline:'End-to-end Intune policy framework covering device compliance, configuration profiles, and MAM app protection policies across Windows, iOS, and Android — enforcing Zero Trust on every endpoint.',
    tech:['Microsoft Intune','Conditional Access','MAM','Entra ID','Microsoft Defender'],
    icon:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    link:'#',
    meta:[
      {label:'Type', val:'Enterprise Deployment'},
      {label:'Platforms', val:'Windows, iOS, Android'},
      {label:'Scope', val:'500+ Devices', cls:'blue'},
      {label:'Status', val:'Active', cls:'green'},
    ],
    overview:[
      'Designed and deployed a comprehensive Microsoft Intune policy framework covering device compliance, configuration profiles, and app protection policies (MAM) across Windows, iOS, and Android device platforms.',
      'The framework enforces Zero Trust principles — every device must meet compliance requirements before accessing corporate resources. Non-compliant devices are automatically blocked via Conditional Access policies in Entra ID.',
      'App Protection Policies (MAM) were deployed for BYOD scenarios, protecting corporate data within managed apps without requiring full device enrolment — critical for a workforce using personal mobile devices.',
    ],
    steps:[
      {title:'Audit Existing Device Fleet', desc:'Inventoried all devices, identified unmanaged endpoints, and categorised by platform and ownership (corporate vs BYOD).', code:null},
      {title:'Design Compliance Policy Framework', desc:'Created tiered compliance policies per platform — minimum OS version, BitLocker encryption, Defender status, screen lock, and jailbreak detection for mobile.', code:null},
      {title:'Build Configuration Profiles', desc:'Deployed Wi-Fi profiles, VPN configuration, email setup, security restrictions, and Windows Update rings via Intune configuration profiles.', code:null},
      {title:'Configure App Protection Policies (MAM)', desc:'Built MAM policies for Outlook, Teams, and OneDrive — data transfer restrictions, PIN requirements, and remote wipe capability for BYOD devices.', code:null},
      {title:'Implement Conditional Access', desc:'Created CA policies in Entra ID requiring compliant device + MFA for all cloud app access. Tested block/allow scenarios across all platforms.', code:null},
    ],
    outcomes:['500+ devices under managed compliance','BYOD data protection without full MDM','CA blocking non-compliant access','Device onboarding time -65%','Zero policy conflicts across platforms'],
    screenshots: {},
  },
  // ─────────────────────────────────────────────────────────────
  {
    id:'03', num:'03',
    cat:'microsoft', catLabel:'Microsoft 365 & Endpoint',
    status:'live', statusLabel:'Live',
    name:'Azure Sentinel SIEM Setup',
    desc:'End-to-end Microsoft Sentinel deployment with custom analytics rules, KQL-based threat hunting queries, and automated Logic Apps playbooks for incident response and alerting.',
    tagline:'Full Microsoft Sentinel SIEM deployment — 8 data connectors, 25+ custom KQL detection rules, and automated Logic Apps playbooks reducing mean time to detect from 4 hours to 15 minutes.',
    tech:['Azure Sentinel','KQL','Logic Apps','Microsoft 365','Entra ID','Defender'],
    icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    link:'#',
    meta:[
      {label:'Type', val:'Security Operations'},
      {label:'Log Sources', val:'8 Connectors'},
      {label:'MTTD Reduced', val:'4hr → 15min', cls:'green'},
      {label:'Status', val:'Active', cls:'green'},
    ],
    overview:[
      'Deployed Microsoft Sentinel as the centralised SIEM/SOAR platform — connecting data sources, building detection rules, and automating incident response through Logic Apps playbooks.',
      'Connected 8 data connectors including Microsoft 365, Entra ID sign-in logs, Microsoft Defender, Azure Activity, and custom log sources. Built KQL-based analytics rules for threat detection covering brute force, impossible travel, and privilege escalation scenarios.',
      'Automated first-response actions via Logic Apps — suspicious sign-ins trigger automatic account disable, manager notification, and ServiceNow ticket creation, cutting MTTD from 4 hours to 15 minutes.',
    ],
    steps:[
      {title:'Connect Data Sources', desc:'Enabled 8 data connectors — M365 Defender, Entra ID, Azure Activity, Office 365, and custom syslog forwarding from on-prem infrastructure.', code:null},
      {title:'Build Analytics Rules', desc:'Created 25+ custom analytics rules using KQL — detecting failed login spikes, impossible travel, new admin accounts, and suspicious OAuth app grants.', code:'SecurityEvent\n| where EventID == 4625\n| summarize FailedAttempts=count() by Account, bin(TimeGenerated, 5m)\n| where FailedAttempts > 10'},
      {title:'Configure Watchlists & Threat Intel', desc:'Imported threat intelligence feeds, created watchlists for high-value accounts and sensitive IP ranges, and tuned rules to reduce false positives.', code:null},
      {title:'Build Automation Playbooks', desc:'Created Logic Apps playbooks: auto-disable user on impossible travel alert, auto-isolate device on Defender alert, create ServiceNow P1 ticket on critical incident.', code:null},
      {title:'Build Workbooks & Dashboards', desc:'Created executive and SOC analyst workbooks showing sign-in trends, alert volume, top incident categories, and SLA compliance metrics.', code:null},
    ],
    outcomes:['MTTD from 4 hours to 15 minutes','60% of incidents fully automated','25+ custom detection rules','Zero false positives after tuning','Executive dashboard live'],
    screenshots: {},
  },
  // ─────────────────────────────────────────────────────────────
  {
    id:'04', num:'04',
    cat:'infrastructure', catLabel:'Infrastructure & Deployment',
    status:'live', statusLabel:'Live',
    name:'Windows Autopilot Deployment',
    desc:'Implemented Windows Autopilot zero-touch provisioning for 100+ devices — configuring Entra ID join, Intune enrolment profiles, and ESP policies to reduce device setup time from hours to under 30 minutes.',
    tagline:'Zero-touch Windows Autopilot provisioning for 100+ devices — Entra ID join, Intune enrolment, and ESP configuration bringing setup time from 3 hours down to under 30 minutes with no IT hands-on time.',
    tech:['Windows Autopilot','Intune','Entra ID','OOBE','PowerShell','ESP'],
    icon:'<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>',
    link:'#',
    meta:[
      {label:'Type', val:'Endpoint Provisioning'},
      {label:'Devices', val:'100+'},
      {label:'Setup Time', val:'< 30 mins', cls:'green'},
      {label:'IT Touch Time', val:'Zero', cls:'green'},
    ],
    overview:[
      'Implemented Windows Autopilot for zero-touch device provisioning across a 100+ device fleet. Prior to this project, each device required 2–3 hours of manual IT setup. Autopilot reduced this to under 30 minutes with zero IT hands-on time.',
      'Configured deployment profiles for two scenarios: Entra ID join for cloud-only devices and hybrid Entra ID join for devices requiring on-prem domain access. Enrolled hardware hashes via partner integration and CSV upload.',
      'The Enrolment Status Page (ESP) was configured to ensure all critical apps and policies applied before users reached the desktop, preventing support calls from partially configured devices.',
    ],
    steps:[
      {title:'Harvest Hardware Hashes', desc:'Used PowerShell script to extract hardware hashes from existing devices. New devices were enrolled directly via OEM integration with Microsoft.', code:'Install-Script -Name Get-WindowsAutoPilotInfo\nGet-WindowsAutoPilotInfo -OutputFile "AutoPilotHWID.csv" -Append'},
      {title:'Upload & Create Deployment Profiles', desc:'Imported hardware hashes into Intune > Devices > Enrollment > Autopilot. Created deployment profiles for AADJ and HAADJ scenarios with custom OOBE settings.', code:null},
      {title:'Configure Enrolment Status Page (ESP)', desc:'Set up ESP to block user access until all required apps (VPN client, security tools, Office) and compliance policies were applied successfully.', code:null},
      {title:'Assign Profiles & Test', desc:'Assigned deployment profiles to device groups, performed test runs with fresh Windows installations, validated all apps and policies applied, and documented the full flow.', code:null},
    ],
    outcomes:['Setup time 3 hours → 30 minutes','Zero IT hands-on per device','All policies applied before login','Scalable to 500+ with no change','Reduced helpdesk calls from new devices'],
    screenshots: {},
  },
  // ─────────────────────────────────────────────────────────────
  {
    id:'05', num:'05',
    cat:'infrastructure', catLabel:'Infrastructure & Deployment',
    status:'live', statusLabel:'Live',
    name:'SCCM Software Deployment Pipeline',
    desc:'Built and managed an SCCM application deployment pipeline for standardised Windows imaging, software packaging, and patch management across a 500+ device enterprise environment.',
    tagline:'Standardised Windows imaging and application deployment pipeline via SCCM/ConfigMgr — covering OS imaging, application packaging, and patch management across a 500+ device enterprise fleet.',
    tech:['SCCM','ConfigMgr','Windows Imaging','PowerShell','AD GPO','WDS'],
    icon:'<path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>',
    link:'#',
    meta:[
      {label:'Type', val:'Systems Management'},
      {label:'Devices', val:'500+'},
      {label:'Image Deploy', val:'45 mins', cls:'blue'},
      {label:'Patch Compliance', val:'98%', cls:'green'},
    ],
    overview:[
      'Built and managed an SCCM/ConfigMgr software deployment pipeline covering Windows OS imaging, application packaging, patch management, and software distribution for a 500+ device enterprise fleet.',
      'Created a standardised Windows 11 reference image with all required drivers, security tools, and baseline applications pre-installed. Images are deployed via PXE boot over WDS, ensuring all devices ship with identical, compliant builds.',
      'Packaged 30+ applications as SCCM applications and programs, enabling silent automated installation, version tracking, and targeted deployment to device collections based on department and location.',
    ],
    steps:[
      {title:'Build Reference Image', desc:'Created a clean Windows 11 reference image with drivers, security agents, and baseline apps. Captured via MDT/SCCM task sequence and stored in distribution points.', code:null},
      {title:'Configure PXE Boot & WDS', desc:'Set up WDS server for network boot, configured SCCM distribution points, and tested PXE boot across VLANs including DHCP option configuration.', code:null},
      {title:'Package Applications', desc:'Packaged 30+ applications (MSI/EXE/MSIX) with silent install parameters, detection methods, and return code handling for reliable automated deployment.', code:'# Example: Silent Office 365 install\nSetup.exe /configure configuration.xml\n# Detection: Registry key\nHKLM:\\SOFTWARE\\Microsoft\\Office\\ClickToRun\\Configuration'},
      {title:'Create Task Sequences', desc:'Built OSD task sequences for new device provisioning and refresh scenarios, including disk partitioning, image apply, driver injection, and post-setup steps.', code:null},
      {title:'Deploy Patches & Updates', desc:'Configured Software Update Point, created patch deployment rings (pilot → broad), and built compliance reports for WSUS/SCCM patch status tracking.', code:null},
    ],
    outcomes:['Standardised image across 500+ endpoints','Provisioning reduced to 45 minutes','99.5% deployment success rate','Patch compliance 98%','App packaging library reused'],
    screenshots: {},
  },
  // ─────────────────────────────────────────────────────────────
  {
    id:'06', num:'06',
    cat:'infrastructure', catLabel:'Infrastructure & Deployment',
    status:'live', statusLabel:'Live',
    name:'Apple Business Manager (ABM) Rollout',
    desc:'Managed full iPhone and iPad deployment lifecycle through Apple Business Manager — device enrolment, Intune compliance policy assignment, and app distribution for enterprise mobile users.',
    tagline:'Full lifecycle iPhone and iPad deployment via Apple Business Manager — zero-touch ADE enrolment, Intune compliance enforcement, and silent VPP app distribution for 80+ enterprise mobile devices.',
    tech:['Apple Business Manager','Microsoft Intune','iOS MDM','VPP','Conditional Access'],
    icon:'<circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>',
    link:'#',
    meta:[
      {label:'Type', val:'Mobile Device Management'},
      {label:'Devices', val:'80+ iOS'},
      {label:'Enrolment', val:'Zero-Touch', cls:'blue'},
      {label:'Compliance', val:'100%', cls:'green'},
    ],
    overview:[
      'Managed the full deployment lifecycle for 80+ company-owned iPhones and iPads through Apple Business Manager (ABM) — from device purchase and enrolment through to Intune compliance policy application and enterprise app distribution via VPP.',
      'ABM was integrated with Microsoft Intune via the MDM server token, enabling Automated Device Enrolment (ADE/DEP) so devices automatically enrol into Intune on first boot with zero user interaction required.',
      'Volume Purchase Program (VPP) was configured to silently push licensed enterprise apps (Microsoft Office suite, Authenticator, Teams, Company Portal) to all managed iOS devices without App Store credentials.',
    ],
    steps:[
      {title:'Configure ABM & Intune Integration', desc:'Linked Apple Business Manager to Microsoft Intune using MDM server token. Configured ADE to auto-assign devices to the Intune MDM server on activation.', code:null},
      {title:'Create Enrolment Profiles', desc:'Built Supervised Enrolment profiles with company SSID pre-configured, Setup Assistant screens skipped, and Intune Company Portal as required app on enrolment.', code:null},
      {title:'Deploy Compliance & Config Policies', desc:'Applied iOS compliance policies (passcode requirements, OS version, jailbreak detection) and configuration profiles (Wi-Fi, VPN, email, restrictions).', code:null},
      {title:'Set Up VPP App Distribution', desc:'Linked VPP token to Intune, purchased and assigned licences for 12 enterprise apps, configured as required for automatic silent installation on enrolment.', code:null},
      {title:'Test & Document Process', desc:'Performed factory-reset enrolment tests, validated all apps and policies applied within 10 minutes, and produced a device provisioning runbook for the helpdesk team.', code:null},
    ],
    outcomes:['80+ iOS devices under MDM','Zero-touch enrolment < 10 minutes','100% compliance achieved','12 enterprise apps silently pushed','Helpdesk runbook produced'],
    screenshots: {},
  },
  // ─────────────────────────────────────────────────────────────
  {
    id:'07', num:'07',
    cat:'cybersecurity', catLabel:'Cybersecurity & Zero Trust',
    status:'live', statusLabel:'Live',
    name:'Zero Trust Security Implementation',
    desc:'Implemented Zero Trust principles across an enterprise environment — Conditional Access policies, MFA enforcement, Privileged Identity Management (PIM), and Microsoft Defender for Endpoint integration.',
    tagline:'Enterprise Zero Trust deployment — 18 Conditional Access policies, 100% MFA coverage, PIM for all privileged roles, and Microsoft Defender for Endpoint across all devices, raising Secure Score by 42 points.',
    tech:['Entra ID','Microsoft Defender','PIM','MFA','Conditional Access','Named Locations'],
    icon:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    link:'#',
    meta:[
      {label:'Type', val:'Security Architecture'},
      {label:'CA Policies', val:'18 Created'},
      {label:'MFA Coverage', val:'100%', cls:'green'},
      {label:'Secure Score', val:'+42 pts', cls:'green'},
    ],
    overview:[
      'Designed and implemented a Zero Trust security model across an enterprise environment — the core principle being "never trust, always verify." Every access request is authenticated, authorised, and continuously validated regardless of network location.',
      'Deployed 18 Conditional Access policies covering MFA requirements, compliant device enforcement, named location restrictions, sign-in risk policies, and app-specific controls. All privileged accounts were migrated to Privileged Identity Management (PIM) for just-in-time access.',
      'Microsoft Defender for Endpoint was deployed across all Windows devices, integrated with Intune for compliance signalling and with Sentinel for centralised alerting. Microsoft Secure Score increased by 42 points post-implementation.',
    ],
    steps:[
      {title:'Audit Current Access Policies', desc:'Reviewed existing CA policies, identified gaps (no MFA on legacy auth, no device compliance requirement), and mapped out the target Zero Trust policy set.', code:null},
      {title:'Enable MFA for All Users', desc:'Enforced MFA via CA policy for all users, enabled Microsoft Authenticator as primary MFA method, and excluded break-glass accounts with monitored alerts.', code:null},
      {title:'Deploy Conditional Access Policies', desc:'Built 18 CA policies: require compliant device, block legacy authentication, enforce MFA from untrusted locations, block risky sign-ins, restrict admin roles.', code:null},
      {title:'Implement Privileged Identity Management', desc:'Migrated all Global Admin, Exchange Admin, and Intune Admin accounts to PIM — requiring approval workflows and time-limited activation for all privileged roles.', code:null},
      {title:'Deploy Microsoft Defender for Endpoint', desc:'Onboarded all Windows devices to MDE via Intune, configured security baselines, enabled attack surface reduction rules, and integrated with Sentinel.', code:null},
    ],
    outcomes:['MFA for 100% of users','Legacy auth fully blocked','All privileged access via PIM','Secure Score +42 points','Zero phishing compromises post-deploy'],
    screenshots: {},
  },
  // ─────────────────────────────────────────────────────────────
  {
    id:'08', num:'08',
    cat:'cybersecurity', catLabel:'Cybersecurity & Zero Trust',
    status:'live', statusLabel:'Live',
    name:'Zscaler ZIA/ZPA Deployment',
    desc:'Configured and managed Zscaler Internet Access (ZIA) and Private Access (ZPA) for secure internet browsing and private application access, including Zscaler VPN group assignments for new user onboarding.',
    tagline:'Enterprise Zscaler deployment replacing legacy VPN — ZIA for SSL-inspected internet access and ZPA for private application access across 300+ users, fully integrated with Entra ID SSO.',
    tech:['Zscaler ZIA','Zscaler ZPA','SSO / SAML','Entra ID','SSL Inspection','DLP'],
    icon:'<path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>',
    link:'#',
    meta:[
      {label:'Type', val:'Network Security'},
      {label:'Users', val:'300+'},
      {label:'Traffic Inspected', val:'100%', cls:'blue'},
      {label:'VPN Replaced', val:'Yes', cls:'green'},
    ],
    overview:[
      'Deployed and managed Zscaler Internet Access (ZIA) and Zscaler Private Access (ZPA) for an organisation of 300+ users — replacing legacy VPN with a modern, cloud-delivered security stack aligned to Zero Trust principles.',
      'ZIA provides secure internet access with SSL inspection, URL filtering, DLP policies, and threat prevention. ZPA replaced split-tunnel VPN for private application access, ensuring users connect directly to applications without network-level access.',
      'Integrated Zscaler with Entra ID for SAML-based SSO and automated group-based policy assignment. New user onboarding includes automatic ZPA group assignment ensuring proper access from day one.',
    ],
    steps:[
      {title:'Configure ZIA Tenant & Locations', desc:'Set up ZIA tenant, configured office locations and sub-locations, deployed Zscaler App client via Intune to all endpoints for automatic traffic forwarding.', code:null},
      {title:'Build URL Filtering & Threat Policies', desc:'Created custom URL filtering policies by department, configured SSL inspection with certificate deployment, enabled Cloud Sandbox for unknown file execution.', code:null},
      {title:'Configure DLP Policies', desc:'Built DLP rules to detect and block transmission of sensitive data (credit card numbers, SIN numbers, confidential documents) over web traffic and cloud storage.', code:null},
      {title:'Deploy ZPA for Private Access', desc:'Configured ZPA App Connectors in the data centre, built application segments for internal apps, migrated users from VPN to ZPA app-by-app to ensure no disruption.', code:null},
      {title:'Integrate with Entra ID & Onboarding', desc:'Set up SAML SSO between Zscaler and Entra ID, built group-based policy mapping, and automated ZPA group assignment for new user onboarding via SCIM provisioning.', code:null},
    ],
    outcomes:['100% traffic inspected via ZIA','Legacy VPN fully replaced by ZPA','New user access automated on onboarding','DLP preventing data exfiltration','VPN support tickets reduced to zero'],
    screenshots: {},
  },
  // ─────────────────────────────────────────────────────────────
  {
    id:'09', num:'09',
    cat:'networking', catLabel:'Automation & Scripting',
    status:'live', statusLabel:'Live',
    name:'PowerShell IT Automation Scripts',
    desc:'Developed a library of PowerShell scripts for automating M365 user provisioning, licence assignment, group membership management, and weekly support metric reporting — reducing manual effort by 60%.',
    tagline:'A PowerShell automation library for Microsoft 365 — user provisioning, licence management, group audits, and automated weekly reporting, saving 10+ hours per week and eliminating manual provisioning errors.',
    tech:['PowerShell','Microsoft Graph API','Azure AD','Exchange Online','SharePoint','Azure Automation'],
    icon:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    link:'#',
    meta:[
      {label:'Type', val:'IT Automation'},
      {label:'Scripts Built', val:'15+'},
      {label:'Time Saved', val:'10+ hrs/week', cls:'green'},
      {label:'Error Rate', val:'< 0.1%', cls:'green'},
    ],
    overview:[
      'Developed a library of 15+ PowerShell scripts to automate repetitive IT administration tasks in Microsoft 365 — user provisioning, licence assignment, group membership management, mailbox configuration, and weekly support reporting.',
      'Scripts are triggered via Azure Automation Runbooks on a schedule or via ServiceNow request, ensuring consistency and eliminating manual errors. The Graph API is used throughout for modern, permission-scoped access to M365 services.',
      'The most impactful automation is the new user provisioning script — which creates the AD account, syncs to Entra ID, assigns the correct M365 licence, adds the user to appropriate groups, configures the mailbox, and sends a welcome email — all in under 3 minutes.',
    ],
    steps:[
      {title:'New User Provisioning Script', desc:'Built end-to-end user creation script — creates AD account, triggers AAD Connect sync, assigns M365 licence via Graph API, adds to groups, configures mailbox, and sends credentials.', code:'# Assign M365 licence via Graph API\n$licenceBody = @{\n  addLicenses = @(@{skuId = $licenceSku})\n  removeLicenses = @()\n}\nSet-MgUserLicense -UserId $userId -BodyParameter $licenceBody'},
      {title:'Bulk Licence Management', desc:'Script to audit licence assignments, identify unused licences (inactive users), reallocate to new starters, and produce a monthly cost optimisation report.', code:null},
      {title:'Group Membership Audit', desc:'Weekly script that compares Entra ID group memberships against HR source-of-truth, flags discrepancies, and auto-removes accounts inactive for 90+ days.', code:null},
      {title:'Weekly Support Metric Report', desc:'Automated ServiceNow data pull, calculates FCR rate, SLA compliance, top ticket categories, and emails a formatted HTML report to management every Monday morning.', code:null},
      {title:'Deploy via Azure Automation', desc:'Published scripts as Azure Automation Runbooks with Managed Identity permissions, scheduled triggers, and Teams/email alerting on failures.', code:null},
    ],
    outcomes:['Provisioning reduced from 45 min to 3 min','10+ hours/week saved','~$2,400/year licence cost saving','Zero provisioning errors since deploy','Weekly reporting fully automated'],
    screenshots: {},
  },
  // ─────────────────────────────────────────────────────────────
  {
    id:'10', num:'10',
    cat:'networking', catLabel:'Automation & Scripting',
    status:'wip', statusLabel:'In Progress',
    name:'ServiceNow ITSM Knowledge Base',
    desc:'Building a comprehensive ServiceNow knowledge base with SOPs, runbooks, troubleshooting guides, and process flows for L1/L2 support — improving first-contact resolution rates and reducing escalations.',
    tagline:'A structured ServiceNow knowledge base — 40+ articles covering top recurring IT issues, process flows, and runbooks — improving first-contact resolution by 15% and cutting repeat tickets by 30%.',
    tech:['ServiceNow','ITSM','ITIL','Documentation','Process Flows','Jira'],
    icon:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
    link:'#',
    meta:[
      {label:'Type', val:'ITSM Documentation'},
      {label:'Articles', val:'40+ and growing'},
      {label:'FCR Improvement', val:'+15%', cls:'green'},
      {label:'Status', val:'In Progress', cls:'blue'},
    ],
    overview:[
      'Building a structured ServiceNow knowledge base covering all common IT support scenarios — from Microsoft 365 troubleshooting and Intune enrolment issues to network connectivity, hardware failures, and account access problems.',
      'Each article follows a standardised template: problem description, root cause analysis, step-by-step resolution, escalation path, and related articles. Process flows are created and embedded in articles for visual clarity.',
      'The knowledge base is integrated with the ServiceNow incident form — analysts are prompted with relevant articles based on category and short description, improving first-contact resolution rates and reducing escalations to L2.',
    ],
    steps:[
      {title:'Define Article Structure & Templates', desc:'Created standardised article templates covering: symptom description, root cause, resolution steps, screenshots, escalation criteria, and related CIs.', code:null},
      {title:'Categorise & Prioritise Content', desc:'Analysed 6 months of ticket data to identify top 50 recurring issues. Prioritised content creation based on volume, resolution time, and escalation rate.', code:null},
      {title:'Write & Publish Core Articles', desc:'Published 40+ articles covering M365, Intune, Windows troubleshooting, network issues, account management, and hardware support with step-by-step guidance.', code:null},
      {title:'Build Process Flow Diagrams', desc:'Created process flow diagrams for complex procedures (new user onboarding, device replacement, VPN troubleshooting) and embedded in ServiceNow articles.', code:null},
      {title:'Integrate with Incident Management', desc:'Configured ServiceNow to surface relevant KB articles during incident creation, track article usage, and identify gaps based on unresolved tickets.', code:null},
    ],
    outcomes:['FCR improved +15% in 60 days','Repeat ticket volume -30%','New analyst onboarding time halved','40+ articles published','Articles added weekly from new incidents'],
    screenshots: {},
  },
];
