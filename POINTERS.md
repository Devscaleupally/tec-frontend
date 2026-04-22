# Can be improved

1. Instead of writing the same button style again and again, we can create a reusable button component with variants.
   `intherootproject/shared/components/ui/Button.tsx`

NOTE: This is not only for buttons. We can do the same for Grid, Select, Section, etc.

---

2. If a component is only used in one page, then create it inside that route folder instead of putting it outside.
   This makes it easy to understand that the component belongs to that page only.

---

3. We can define common styles like margin, padding, color, font-family, font-weight, etc. inside the theme config.
   This will help with responsiveness automatically in most cases.
   If needed, we can still write custom styles inside components/pages.

---

4. We can create an `IconConfig` file and map icons using key-value pairs.
   This can support both icon libraries and custom icons (jpg/png/svg).
   So if we want to change any icon later, we just update it in one place and it will update everywhere.

---

5. If we are using dates anywhere, create a global function to format the date inside helper/utils.
   The date format should come from a `CONSTANT.ts/js` file.

NOTE: Same for amount/currency.
We should just pass the amount, and it will automatically format based on the currency defined in constants.

---

6. Always store static or fixed values inside a `CONSTANT.ts/js` file instead of hardcoding them in multiple places.

---

7. Use proper naming for files, variables, and components.
   Names should be clear and meaningful so anyone can understand the code easily.

---

8. Avoid repeating code (DRY principle).
   If the same logic is used in multiple places, move it to a common function or helper.

---

9. Keep components small and simple.
   One component should do one job only.
   This makes it easier to reuse and maintain.

---

10. Add basic comments where needed.
    Don’t over-comment, but explain complex logic so others (or future you) can understand it quickly.

---