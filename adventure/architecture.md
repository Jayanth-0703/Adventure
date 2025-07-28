# Architecture Overview

```mermaid
graph TD;
    A[App (Root)];
    B[Navbar];
    C[Main Content];
    D[Footer];
    E[EventList];
    F[TourList];
    G[DestinationGrid];
    H[FilterBar];
    I[ContactForm];
    J[ThemeToggle];
    K[Live Chat Button];
    L[Image Galleries & Sliders];
    M[User Feedback (Toasts)];
    N[Event Modal];
    O[Tour Modal];

    A --> B;
    A --> C;
    A --> D;
    C --> E;
    C --> F;
    C --> G;
    C --> H;
    C --> I;
    C --> J;
    C --> K;
    C --> L;
    C --> M;
    E --> N;
    F --> O;
```

- **App (Root):** Main entry point, wraps all sections.
- **Navbar:** Sticky navigation with smooth scrolling.
- **Main Content:** Contains all feature sections.
- **Footer:** App footer.
- **EventList/TourList:** Show events/tours, open modals for details/booking.
- **DestinationGrid:** Explore destinations, filterable.
- **FilterBar:** Filter destinations by type/country.
- **ContactForm:** User contact with validation.
- **ThemeToggle:** Light/dark mode switch.
- **Live Chat Button:** Quick support access.
- **Image Galleries & Sliders:** Visual content for destinations/tours.
- **User Feedback:** Toast notifications for actions/forms.

This diagram shows the main component relationships and data flow in the app.
