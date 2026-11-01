# DS4EIW 2027 website

Static HTML/CSS website for the sixth International Workshop on Data Science for Equality, Inclusion and Well-being Challenges, co-located with IEEE ICDE 2027 in Copenhagen, Denmark. The workshop builds on five previous editions. Accepted November 1, 2026. Public workshop date: **May 17, 2027 (tentative)**, as requested by the maintainer. All unconfirmed deadlines, speaker details, registration fields and submission policies use **TBD**.

## Edit and preview

No build tools or package installation are required.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ from this directory. Also test a project prefix (for example `/2027/`) before deployment. All local links and assets must remain relative, including the favicon.

| Files | What to edit |
| --- | --- |
| `index.html` | Introduction, news, date summary, conference logo |
| `dates.html` | Proposed timeline and confirmed updates |
| `submit.html`, `authors.html` | Topics, submission and camera-ready instructions |
| `about.html` | Five chairs, contacts, tentative PC membership |
| `workshop.html`, `accepted_papers.html` | Program, confirmed speakers, papers, previous editions |
| `registration.html` | Confirmed ICDE registration guidance |
| `menu.html`, `footer.html` | Canonical shared fragments; synchronise the matching header/footer HTML in all eight pages when editing |
| `js/menu.js` | Accessible mobile menu behaviour; shared navigation is already rendered in HTML |
| `css/edition.css` | Scoped responsive/accessibility adjustments only |
| `img/` | Workshop logo, favicon, ICDE logo, Copenhagen banner |

The base `frame.css`, `controls.css`, and `custom.css` are byte-identical to the 2026 template. Preserve the existing typography, layout, blue brand, and menu/footer structure. The pages retain the existing Google Fonts families. Navigation works without a remote JavaScript dependency and remains visible without JavaScript. The inherited CSS contains dormant `loading.gif` references for unused gallery components; none of the workshop pages uses these components or requests that image.

Preserve existing routes and anchors, including `#toi`, `#info`, `#submission`, `#cameraready`, `#organisation`, `#contact`, `#tpc`, `#program`, `#keynote`, `#editions`, `#registration`, and `#accepted-papers`. Do not publish old paper downloads, slides, award assets, sponsor claims, or submission portals. Use straight quotes and plain hyphens in new prose. Keep tentative PC names and source ordering; do not silently correct name labels without chair confirmation.

## Pending confirmations

- Confirm May 17, 2027 with ICDE; display it as tentative until confirmation. Do not replace it with an unspecified workshop date.
- Public deadline fields stay TBD. Internal scheduling proposals are kept in the separate knowledge activity, not this public site. ICDE workshop-specific camera-ready and timezone requirements must be reconciled with the Proceedings Chairs before dates are published.
- 2027 CMT portal, paper categories and page limits, final formatting and anonymity policy.
- PC invitations, keynote/invited speakers, program, registration fees and author requirements.
- Remote participation is TBD. Do not promise hybrid equipment or remote access.
- Workshop page launch is expected within three weeks of notification (November 22, 2026); publication remains the maintainer's responsibility.

## Deployment

Target repository: https://github.com/DS4EIW/2027.git

Expected Pages URL once enabled: https://ds4eiw.github.io/2027/


Publish the static files using GitHub Pages **Deploy from a branch**, choosing the intended branch and the repository root. No Actions build or Jekyll content generation is needed; `.nojekyll` is included. The user will create/manage the repository and push. No repository was initialised and nothing was published as part of this handoff. Keep preview logs, source documents, private correspondence, and local paths outside the public repository.

## Evidence and asset provenance

Content is based on the chair-supplied DS4EIW 2027 submitted workshop proposal and the organiser-confirmed acceptance date. The proposal and private correspondence are not distributed here. The PC is explicitly tentative, not a list of accepted invitations.

Public conference reference: https://icde2027.github.io/cf-workshop-proposals.html (workshop days, proceedings, registration, and publication guidance). Conference home: https://icde2027.github.io/. Previous edition: https://ds4eiw.github.io/2026/.

Template: DS4EIW 2026, whose README credits https://www.mmm2024.org/. The base CSS credits https://github.com/yenchiah/project-website-template. Retain `LICENSE` and all source attribution.

Assets: `img/ds4eiw-logo.png` and `img/logo.ico` are inherited workshop branding. `img/icde2027-logo.png` is the user-supplied ICDE 2027 Copenhagen conference artwork. `img/copenhagen-banner.jpg` is the Copenhagen harbour image supplied for this site. Image provenance/photographer and reuse permission should be recorded by the maintainer before publication; the code license does not grant rights to conference logos or photographs. Do not infer image licensing from lack of a watermark.

Supplied asset sources:

- ICDE logo: https://orion-rsrc.hyper.ai/media/2024/04/h60nic3u.png
- Copenhagen photograph: https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Denmark/Copenhagen/112079_SCN_Copenhagen_iStock901375804_Z947FA.jpg?tr=w-1200%2Cfo-auto

## Current handoff

This is the final local version for the information currently available. Unresolved fields are intentionally TBD, not missing content. Keep internal planning dates off all public pages until the chairs approve them. The original proposal timeline is historical, not an approved CFP schedule.

## Before publication

Check every local `href`, `src`, CSS image URL and fragment target under a project-site prefix. Verify 18 tentative PC members, all five chairs, matching shared fragments, and identical baseline CSS. Search for stale 2026 operational claims, old portals, page limits, review promises, unsupported sponsor/speaker confirmations, curly quotes and long dashes. Exercise the menu with click, Enter/Space, Tab, and Escape; check widths 320, 390, 768 and desktop. Confirm image loading and visually review before pushing.
