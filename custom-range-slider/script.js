document.addEventListener("DOMContentLoaded", () => {
  const range = document.getElementById("range");
  const label = document.getElementById("range-label");

  // Cache initial values
  const rangeWidth = parseFloat(
    getComputedStyle(range).getPropertyValue("width")
  );
  const labelWidth = parseFloat(
    getComputedStyle(label).getPropertyValue("width")
  );

  // Update label position and value dynamically
  range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const min = +e.target.min;
    const max = +e.target.max;

    const labelLeft =
      value * (rangeWidth / max) -
      labelWidth / 2 +
      scale(value, min, max, 10, -10);
    label.style.left = `${labelLeft}px`;
    label.innerHTML = value;

    // Update aria-label for accessibility
    range.setAttribute("aria-label", `Value: ${value}`);
  });

  // Utility function to map value range
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
});
