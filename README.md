# Vexere FE

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Cài đặt & Khởi động](#cài-đặt--khởi-động)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Quy tắc phát triển](#quy-tắc-phát-triển)
- [Testing](#testing)
- [Liên hệ](#liên-hệ)

---

## Giới thiệu

Đây là frontend project sử dụng Next.js 15, React 19, TypeScript, shadcn/ui, React Query, Zod, và các best practice hiện đại.  
Repo này tuân thủ các quy tắc phát triển nghiêm ngặt về code style, type safety, test coverage và cấu trúc thư mục.

---

## Cài đặt & Khởi động

```bash
pnpm install
pnpm dev
```

Hoặc dùng npm/yarn tương ứng.

---

## Cấu trúc thư mục

```
vexere-fe/
├── public/                 # Tài nguyên tĩnh (hình ảnh, icon, file locales thô của hệ thống)
└── src/
    ├── app/
    │   └── [locale]/       # Thư mục gốc xử lý đa ngôn ngữ
    │       ├── (public)/   # Nhóm Route công cộng (Không cần đăng nhập - Khách/Người dùng vãng lai)
    │       │   ├── layout.tsx  # Chứa Header/Footer công cộng
    │       │   ├── page.tsx    # Trang chủ Portal
    │       ├── (customer)/   # Nhóm Route cần đăng nhập mới có thể sử dụng
    │       ├── (admin)/   # Nhóm Route quản trị
    │       ├── layout.tsx      # Root Layout bắt buộc của Next.js
    │       └── error.tsx | loading.tsx | not-found.tsx
    │
    ├── features/           # Các Module Nghiệp Vụ Cô Lập (Domain-Driven Modules) - mỗi folder gồm api, component, hooks,services,type (nếu có) và file index.tsx
    │
    ├── shared/             # Hạ tầng lõi, không chứa trạng thái nghiệp vụ (Stateless Core)
    │   ├── components/     # UI Component nguyên tử (Button, Modal, Table, Pagination, Breadcrumb)
    │   ├── layouts/        # Giao diện layout tĩnh để các file layout của App Router import vào
    │── constants/          # Các hàm interface, type, enum, validator... được đưa vào đây
    │     |── enums/
    │     |── validator/
    │     |── utils/
    │
    ├── services/           # Tầng kết nối mạng toàn cục (Global Networking Layer)
    │   ├── api-client/     # Cấu hình khởi tạo Axios/Fetcher instance
    │   └── gateway/        # Điều hướng API Gateway và quản lý endpoint gốc
    │
    ├── store/              # Quản lý trạng thái toàn cục (Zustand/Redux)
    │   └── [auth|customer|ui|notification].store.ts
    │
    ├── hooks/              # Các React custom hook dùng chung toàn hệ thống (useAuth, useLocale)
    │   ├── i18n/           # Cấu hình định tuyến động của thư viện next-intl
    │   ├── messages/       # Từ điển ngôn ngữ dạng JSON (vi.json, en.json)
    │   ├── configs/        # File cấu hình app, map biến môi trường (.env), hằng số đường dẫn (routes)
    │   ├── types/          # Định nghĩa kiểu dữ liệu chuẩn toàn cục (Common, API Responses, Pagination)
    │   └── middleware.ts   # Pipeline xử lý điều hướng đa ngôn ngữ & bảo mật route (Auth Guard)
    ├── .env.local
    ├── .env.development
    ├── .env.production
    │
    ├── next.config.ts
    ├── tsconfig.json
    ├── package.json
    ├── eslint.config.mjs
    ├── prettier.config.js
    └── README.md
```

---

## Quy tắc phát triển

- **TypeScript 100%**: Ưu tiên interface, tránh enum, dùng const map, type-safe mọi nơi.
- **Component logic rõ ràng**: Exports, subcomponents, helpers, types.
- **Đặt tên descriptive, dùng auxiliary verbs**: `isLoading`, `hasError`, ...
- **Event handler prefix `handle`**: `handleClick`, `handleSubmit`, ...
- **DRY, functional, declarative code.**
- **Early return cho logic rõ ràng.**
- **Tất cả page mới phải có unit test tương ứng.**
- **Sử dụng shadcn/ui cho UI, Zod cho validation, React Hook Form cho form.**
- **Query key quản lý tập trung tại `constants/common.ts`.**
- **Interface dùng chung quản lý tại `types/interfaces/common.ts`.**
- **Schema dùng chung quản lý tại `constants/schema.ts`.**

---

## ESLint Rules

Project hiện đang dùng flat config trong `eslint.config.mjs` và áp dụng các nhóm rule sau:

- `react` recommended
- `react-hooks` recommended
- `jsx-a11y` recommended
- `@next/next` recommended
- `@next/next/core-web-vitals`

Phạm vi áp dụng:

- Bỏ qua: `.next/**`, `node_modules/**`, `out/**`, `dist/**`, `coverage/**`
- `no-unused-vars` áp dụng cho `js`, `jsx`, `mjs`, `cjs`
- `@typescript-eslint/no-unused-vars` áp dụng cho `ts`, `tsx`, `mts`, `cts`

Một số rule đang được custom để phù hợp với codebase:

- `no-unused-vars`: `warn`
  Cảnh báo khi import, biến, tham số, hoặc giá trị destructuring được khai báo nhưng không sử dụng.
- `@typescript-eslint/no-unused-vars`: `warn`
  Bản TypeScript-aware của rule trên. Các tên bắt đầu bằng `_` được xem là cố ý không dùng.
- `no-restricted-syntax`: `error`
  Cấm `import * as React from "react"`. Chỉ import đúng React APIs cần thiết.
- `jsx-a11y/alt-text`: `warn`
  Nhắc bổ sung alt text cho ảnh, có hỗ trợ cả component `Image`.
- `jsx-a11y/aria-props`: `warn`
  Cảnh báo khi dùng sai ARIA props.
- `jsx-a11y/aria-proptypes`: `warn`
  Cảnh báo khi giá trị ARIA không đúng kiểu hợp lệ.
- `jsx-a11y/aria-unsupported-elements`: `warn`
  Cảnh báo khi gán ARIA vào element không hỗ trợ.
- `jsx-a11y/role-has-required-aria-props`: `warn`
  Cảnh báo khi role thiếu ARIA props bắt buộc.
- `jsx-a11y/role-supports-aria-props`: `warn`
  Cảnh báo khi role nhận ARIA props không hợp lệ.

Những rule đang tắt:

- `jsx-a11y/click-events-have-key-events`
- `jsx-a11y/label-has-associated-control`
- `react/jsx-no-target-blank`
- `react/no-unknown-property`
- `react/prop-types`
- `react/react-in-jsx-scope`

Lưu ý:

- Trong file TypeScript, rule `no-unused-vars` gốc được tắt để tránh trùng lặp với `@typescript-eslint/no-unused-vars`.
- Nếu cần điều chỉnh mức độ cảnh báo hoặc tắt thêm rule, cập nhật trực tiếp trong `eslint.config.mjs`.

---

## Testing

- Viết unit test cho mọi page, component, logic quan trọng.
- Đặt file test trong `__tests__/` hoặc cùng thư mục với file chính.
- Sử dụng Jest, Testing Library.
- Không merge PR nếu thiếu test cho page mới.

---

## Liên hệ

- Đội ngũ phát triển: [Tên team/Slack/Email]
- Đóng góp: Mở PR, tuân thủ quy tắc phát triển.

# baseNextjs
