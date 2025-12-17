This is the detailed report of the finalized **Sai Leela Rahasya** web application, encompassing the structure, features, and design decisions made for all components.

## 📝 Detailed Application Report: Sai Leela Rahasya

### I. Application Mission & Core Philosophy

The application's fundamental mission is to move beyond the simple narrative of Sai Baba's miracles (_Leela_) to uncover the hidden, instructional story (_Bodhakatha_). It aims to deliver "crystal clear knowledge" and "True information related to Sai Baba's life fact's" and convey the "anguish of Sai's heart to every heart".

### II. Interface & Navigation Strategy

The application employs a responsive design ensuring accessibility across all device types.

### I. Interface Design & Navigation Strategy

The app utilizes responsive design principles for optimal user experience:

| **Element** | **Mobile (Portrait)** | **Tablet/Desktop (Landscape)** | **Function** |
| --- | --- | --- | --- |
| **Primary Navigation** | **Footer Tab Bar** | **Left-Hand Sidebar** | Persistent, one-click access to the five core features. |
| --- | --- | --- | --- |
| **Utility Menu** | **Top Right Corner Avatar Icon** (Slide-Out Panel) | **Top Right Corner Avatar Icon** (Slide-Out Panel) | Houses user account actions (Sign In/Profile) and secondary links (FAQ, Donate, Glossary, Contact Us). |
| --- | --- | --- | --- |
| **Entry Point** | **Landing Page** | **Landing Page** | Acts as the spiritual welcome and drives users to explore the content. |
| --- | --- | --- | --- |

#### Entry Point: Landing Page

The app opens with a focused Landing Page that acts as a spiritual welcome mat:

- **Hero Message:** "Sai Leela Rahasya: The Secret of Sai's Plays Revealed."
- **Motto Inclusion:** Features the driving force: "We have believed Sai for years, now let's learn something. It's not our application, Sai, it's your choice."
- **Primary CTA:** Directs users to the core content.
- **Social Integration:** Contains subtle links to the source YouTube Channel, Facebook, and Instagram for audience growth.

#### Primary Navigation (5 Core Features)

The five core features are accessed via persistent navigation:

- **Mobile View:** **Footer Tab Bar** for easy, one-handed access.
- **Tablet/Desktop View:** **Left-Hand Sidebar** for utilizing horizontal space.

| **Feature Page** | **Icon** | **Focus** |
| --- | --- | --- |
| **1\. Leela** | Divine Footprints | Narrative Articles (The "What") |
| --- | --- | --- |
| **2\. Bodhakatha** | Radiant Figure (Instruction) | Instructional Articles (The "Why") |
| --- | --- | --- |
| **3\. Live Stream** | Live Stream Indicator | Real-Time Video Darshan & Library |
| --- | --- | --- |
| **4\. Bhajan/Audio** | Music/Speaker Icon | Auditory Devotion & Library |
| --- | --- | --- |
| **5\. Ask Krishnaji** | Guidance/Question Icon | Personalized Ticket System |
| --- | --- | --- |

## Utility & User Profile Menu (Revised)

#### The Utility Menu is triggered by clicking the User/Avatar icon in the Top Right Corner and slides open from the right

### Menu Content Breakdown

<div class="joplin-table-wrapper"><table><thead><tr><th><h4>User State</h4></th><th><h4>Primary Action (Top of Panel)</h4></th><th><h4>Secondary Links (Below Action)</h4></th></tr><tr><th><h4>Guest User</h4></th><th><h4>Sign In / Register button.</h4></th><th><h4>Glossary | FAQ | Donate | Logout</h4></th></tr></thead></table></div>

#### III. Detailed Feature Implementations

#### 1\. Leela & Bodhakatha Pages (Article Lists)

Both pages display articles in a list view, linking directly to the source YouTube video for content transparency.

- **Leela Page Ordering:** Articles are ordered **Chronologically** by Chapter/Sequence number.
- **Bodhakatha Page Ordering:** Articles are ordered **Semantically** by the Virtue/Theme (e.g., Faith, Saburi) to prioritize instructional wisdom.

#### 2\. Live Streams & Video Darshan Library

This page acts as the central video hub:

- **Priority Placement:** Features a prominently displayed card for the **LIVE NOW** feed, if active.
- **Library:** Lists individual video cards for recorded content (past Aartis, Darshans).
- **Functionality:** Includes an **Upcoming Schedule** section to inform users of the next scheduled stream times.

#### 3\. Bhajan/Audio Page

- **Organization:** Content is structured by function: **Daily Aartis** (Kakad, Madhyan, Dhoop, Shej), **Bhajans**, **Mantras/Chants**, and related **Spiritual Discourses**.
- **User Experience:** Optimized for background listening with a simple interface.

#### 4\. Ask Krishnaji (Personalized Guidance)

This feature is implemented as a professional **Ticket Submission System**.

- **Guest Conversion:** Guests are prompted to **Sign In** to receive personalized answers via email and track their inquiries.
- **Signed-In User Workflow:**
  - **New Ticket Submission:** Users submit a detailed question (the "ticket").
  - **Ticket History:** Users view a list of all their past requests, filterable by Status (**Open, Answered, Closed**).
  - **Ticket Detail:** Displays a chronological log of the original question and the guidance provided by the backend team.
  - **Follow-Up:** Users can submit follow-up questions directly within the ticket detail, maintaining a continuous, organized record of their spiritual correspondence.

### IV. Glossary Page

A dedicated utility page for defining key spiritual terms central to the application's mission, including: **Leela**, **Bodhakatha**, **Sai Leela Rahasya**, **Shraddha**, **Saburi**, and **Darshan**.