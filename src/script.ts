
(() => {
  type NullableHTMLElement = HTMLElement | null;
  type OptionElement = HTMLOptionElement;

  const getEl = (id: string): NullableHTMLElement => {
    return typeof document !== "undefined" ? document.getElementById(id) : null;
  };

  const calculateBill = (): void => {
    
  };

  const toggleTheme = (): void => {
    
  };

  const fillPeopleDropdown = (): void => {
   
  };

  const setupEvents = (): void => {
    const calculateBtn = getEl("calculate") as HTMLButtonElement | null;
    const toggleThemeBtn = getEl("toggle-theme") as HTMLButtonElement | null;

    if (calculateBtn) {
      calculateBtn.addEventListener("click", calculateBill);
    }

    if (toggleThemeBtn) {
      toggleThemeBtn.addEventListener("click", toggleTheme);
    }
  };

  const init = (): void => {
    fillPeopleDropdown();
    setupEvents();
  };

  // Run only if document exists
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }

  // Expose functions for testing
  if (typeof window !== "undefined") {
    (window as any).calculateBill = calculateBill;
    (window as any).fillPeopleDropdown = fillPeopleDropdown;
    (window as any).toggleTheme = toggleTheme;
  }
})();
