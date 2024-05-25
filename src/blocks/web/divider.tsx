import * as React from "react";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import { Styles } from "@chaibuilder/runtime/controls";
import { registerChaiBlock } from "@chaibuilder/runtime";
import { ChaiBlock } from "../../core/types/ChaiBlock.ts";

/**
 * Divider component
 * @param props
 * @constructor
 */
const DividerBlock = (
  props: ChaiBlock & {
    blockProps: Record<string, string>;
    styles: Record<string, string>;
  },
) => {
  const { blockProps, styles } = props;
  return React.createElement("hr", { ...styles, ...blockProps });
};

registerChaiBlock(DividerBlock, {
  type: "Divider",
  label: "Divider",
  category: "core",
  icon: DividerHorizontalIcon,
  group: "basic",
  props: {
    styles: Styles({ default: "bg-gray-900 h-0.5 py-2 my-1" }),
  },
});

export default DividerBlock;
