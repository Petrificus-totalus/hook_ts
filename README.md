# Create

`npx create-react-app name-of-app --template typescript`
`npm i react-router-dom`

# 无参组件

```jsx
import React from "react";
export const Production: React.FC = () => {};
```

# 有参组件

```jsx
import React from "react";

interface PropType {
  id: string | number;
  size: "large" | "small";
  price: number | string;
}
export const ProductionInfo: React.FC<PropType> = ({ id, size, price }) => {
  return <div></div>;
};
```

# snippets

`preferences`--`user snippets`--`tsx`
