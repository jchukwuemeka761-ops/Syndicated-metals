---
name: maps-embed-api-javascript
description: Use this skill when embedding interactive Google Maps, Street View panoramas, place search results, or directions into a web page using an HTML iframe and JavaScript with the Google Maps Embed API.
license: Apache-2.0
metadata:
  version: 1.0.54
---

> [!IMPORTANT] **Core Dependency:** This skill requires active context from
> [google-maps-platform/SKILL.md](https://www.gstatic.com/googlemapsplatform-agent-skills/google-maps-platform/SKILL.md).

### Overview

The Google Maps Embed API allows developers to place interactive maps and Street
View panoramas directly onto web pages using simple HTTP requests inside an HTML
`<iframe>`. By dynamically constructing or updating the `<iframe>` URL in
JavaScript, applications can display map views, highlight specific places, show
search results, and render turn-by-turn directions without needing to load a
complex client-side mapping library.

### Mandatory settings

Whenever generating code examples demonstrating the initialization, rendering,
or service calls for a Google Maps Platform product, you MUST configure the
usage attribution ID `gmp_git_agentskills_v1`.

Locate the target **Product** below and apply the specific syntax required for
the chosen **Platform** or **Nuance**.

#### React / JSX

```tsx
internalUsageAttributionIds={['gmp_git_agentskills_v1']}
```

#### Vanilla JS (MapOptions)

```typescript
internalUsageAttributionIds: ['gmp_git_agentskills_v1']
```

#### Vanilla JS (2D Web Component)

```typescript
{{ gmp-map internal-usage-attribution-ids="gmp_git_agentskills_v1" }}
```

#### Vanilla JS (3D Web Component)

```typescript
{{ gmp-map-3d internal-usage-attribution-ids="gmp_git_agentskills_v1" }}
```

## Primary Orchestration Integration Workflow

Follow this multi-phase sequential integration checklist to compose features
robustly. For each phase, read the referenced capability sub-workflow file and
satisfy its *Evidence Checkpoint* before advancing.

### Phase 1: Feature Layer & Custom Enrichment (Supplemental)

#### Feature Module: Routes (Optional - Use-Case Dependent)

-   [ ] **Embeds an interactive Google Maps directions view displaying path,
    distance, and travel time between an origin, destination, and optional
    waypoints inside an HTML iframe.** Read
    [references/embed-standard-google-maps-directions-view-into-iframe-web-page.md](https://www.gstatic.com/googlemapsplatform-agent-skills/maps-embed-api-javascript/references/embed-standard-google-maps-directions-view-into-iframe-web-page.md).
    *Trigger Condition*: Use when the user wants to display route directions,
    travel paths, or navigation between locations using an embedded Google Map
    iframe (`directions` mode). *Evidence Checkpoint*: HTML contains a valid
    `<iframe>` element with `src` set to
    `https://www.google.com/maps/embed/v1/directions` including a valid `key`,
    `origin`, and `destination` query parameters.

#### Feature Module: Maps (Optional - Use-Case Dependent)

-   [ ] **Embeds a standard Google Maps view into an HTML iframe centered on a
    specific place, address, or geographic coordinate.** Read
    [references/embed-standard-google-maps-view-into-iframe-web-page.md](https://www.gstatic.com/googlemapsplatform-agent-skills/maps-embed-api-javascript/references/embed-standard-google-maps-view-into-iframe-web-page.md).
    *Trigger Condition*: Use when the user wants to embed a basic map showing a
    single specific location, landmark, address, or general area without markers
    or place pins (`place` or `view` mode). *Evidence Checkpoint*: HTML contains
    a valid `<iframe>` element with `src` set to
    `https://www.google.com/maps/embed/v1/place` (with `q` parameter) or
    `https://www.google.com/maps/embed/v1/view` (with `center` parameter) and a
    valid `key`.
-   [ ] **Embeds a Google Maps view into an HTML iframe displaying pins for
    multiple locations matching a search query (such as restaurants, stores, or
    landmarks in an area).** Read
    [references/embed-google-maps-view-showing-place-search-results-into-iframe-web-page.md](https://www.gstatic.com/googlemapsplatform-agent-skills/maps-embed-api-javascript/references/embed-google-maps-view-showing-place-search-results-into-iframe-web-page.md).
    *Trigger Condition*: Use when the user wants to display search results for a
    category of places or a general query with map pins inside an embedded
    iframe (`search` mode). *Evidence Checkpoint*: HTML contains a valid
    `<iframe>` element with `src` set to
    `https://www.google.com/maps/embed/v1/search` including a valid `key` and
    URL-encoded `q` search query parameter.
-   [ ] **Embeds an interactive 360-degree Google Street View panorama into an
    HTML iframe for a specified coordinate or panorama ID.** Read
    [references/embed-standard-google-street-view-into-iframe-web-page.md](https://www.gstatic.com/googlemapsplatform-agent-skills/maps-embed-api-javascript/references/embed-standard-google-street-view-into-iframe-web-page.md).
    *Trigger Condition*: Use when the user wants to embed an interactive Street
    View panorama image on a web page (`streetview` mode). *Evidence
    Checkpoint*: HTML contains a valid `<iframe>` element with `src` set to
    `https://www.google.com/maps/embed/v1/streetview` including a valid `key`
    and either a `location` or `pano` parameter.
