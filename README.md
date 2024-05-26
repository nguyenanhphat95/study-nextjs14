1/ Configuring metadata: có thể config bên trong `layout.tsx` or `page.tsx`

- Export a static metadata object
- Export a dynamic generateMetadata function
- Metadata rules:
  - Cả `layout.tsx` và `page.tsx` có thể export metadata.
  - Nếu define trong a `layout.tsx`, nó sẽ apply cho tất cả các pages trong layout đó
  - Nếu define trong a `page.tsx`, nó chỉ apply cho page đó thoy
  - Metadata được đọc theo thứ tự, từ root level xuống final level
  - Nếu một route được định nghĩa meta data ở cả `layout.tsx` và `page.tsx`, thì nó sẽ ưu tiên `page.tsx` hơn.

2/ Navigation

- Click on element
- Navigation after completing an action

3/ Handle Error in `page.tsx`

- Sử dụng `error.tsx`
- Errors bubbles up to the closest parent error boundary

4/ Handle Error in in Layouts

- The error boundary (`error.tsx`) sẽ không catch error từ `layout.tsx` bởi vì layout nó nằm bên ngoài error boundary
- Để catch được error trong `layout.tsx` , move `error.tsx` ra outside level

5/ Parallel routes

- Sử dụng slot feature
- Để define a slot, chúng ta sửng dụng `@folder` naming convention
- Each slot is passed as a prop to its corresponding `layout.tsx` file.
- Benefits
  - Independent route handling: page.tsx, loading.tsx, error.tsx, not-found.tsx
  - Sub-navigation in routes
- Sử dụng `default.tsx` serves as fallback để render content when can not retrieve a slot's active state from the current URL

6/ Intercepting Routes

- Intercept or stop the default routing behavior to present an alternate view or component when navigating through the UI,
  While still preserving the intended route for scenarios like page reloads

7/ Route Handlers

