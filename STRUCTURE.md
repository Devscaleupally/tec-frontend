# 1. High-Level Architecture (Think in Layers)

Instead of grouping by type, group by **feature/domain + shared layers**:

```
src/
├── app/                # Next.js App Router (routing only)
├── core/               # App-wide infrastructure (store, providers, config)
├── features/           # Domain-driven modules (reports, home, auth, etc.)
├── shared/             # Reusable across features
├── styles/             # Global styles & theme
├── types/              # Global TS types
```

---

# 2. Full Scalable Folder Structure

```
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx        # Redux + global providers
│   │
│   ├── about/
│   ├── reports/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│
├── core/
│   ├── store/
│   │   ├── index.ts         # configureStore
│   │   ├── rootReducer.ts
│   │   └── rootMiddleware.ts
│   │
│   ├── providers/
│   │   ├── ReduxProvider.tsx
│   │   └── ThemeProvider.tsx
│   │
│   ├── config/
│   │   ├── env.ts
│   │   ├── routes.ts
│   │   └── site.ts
│   │
│   └── hoc/
│       ├── withAuth.tsx
│       ├── withLayout.tsx
│       └── withErrorBoundary.tsx
│
├── features/
│   ├── home/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── store/           # optional slice
│   │   ├── services/
│   │   └── types.ts
│   │
│   ├── reports/
│   │   ├── components/
│   │   │   ├── ReportsListView.tsx
│   │   │   ├── ReportDetailView.tsx
│   │   │   └── ReportsTopBar.tsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useReports.ts
│   │   │
│   │   ├── store/
│   │   │   ├── reportsSlice.ts
│   │   │   └── reportsSelectors.ts
│   │   │
│   │   ├── services/
│   │   │   └── reportsApi.ts
│   │   │
│   │   ├── utils/
│   │   └── types.ts
│
├── shared/
│   ├── components/
│   │   ├── ui/              # design system
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SectionWrapper.tsx
│   │
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   ├── useToggle.ts
│   │   └── useMounted.ts
│   │
│   ├── lib/
│   │   ├── fetcher.ts       # base API client
│   │   └── logger.ts
│   │
│   ├── utils/
│   │   ├── formatDate.ts
│   │   └── truncate.ts
│   │
│   └── constants/
│
├── styles/
│   ├── globals.css
│   └── theme.css
│
├── types/
│
└── middleware.ts (optional)
```