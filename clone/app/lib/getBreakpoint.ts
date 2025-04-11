export default function (size: number) {
  let breakpoint = "xxs";
  if (size > 549) breakpoint = "xs";
  if (size > 944) breakpoint = "md";
  if (size > 1134) breakpoint = "lg";
  if (size > 1279) breakpoint = "xl";
  return breakpoint;
}
