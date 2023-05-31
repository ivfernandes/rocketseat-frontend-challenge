"use client";

import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInput } from "@/components/primaryInput";
import { ShoppingBagIcon } from "./icons/shoppingBagIcon";

const sairaStencilOne = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  flex-direction: column;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    padding: 20px 160px;
  }
`;

const Logo = styled.a`
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  color: var(--logo-color);
`;

export function Header() {
  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className}>capputeeno</Logo>
      <div>
        <PrimaryInput
          value={""}
          handleChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
          placeholder="Procurando por algo específico?"
        />
        <ShoppingBagIcon />
      </div>
    </TagHeader>
  );
}
