// Функція для визначення типу вкладки
function determineTabType() {
    var tabsCount = +localStorage.getItem("tabsCount") || 0;
    tabsCount++;

    if (tabsCount === 1) {
        // Це перша вкладка
        localStorage.setItem("tabsCount", tabsCount.toString());
        localStorage.setItem("tabType", "main");
        document.title = "Головна вкладка";
    } else {
        // Це другорядна вкладка
        localStorage.setItem("tabsCount", tabsCount.toString());
        localStorage.setItem("tabType", "secondary");
        document.title = "Другорядна вкладка";
    }
}

// Функція для перевірки, чи це остання вкладка
function checkIfLastTab() {
    var tabsCount = +localStorage.getItem("tabsCount") || 0;
    tabsCount--;

    if (tabsCount === 0) {
        // Остання вкладка закривається, встановлюємо одну з другорядних як головну
        localStorage.setItem("tabType", "main");
        localStorage.setItem("tabsCount", "1");
        document.title = "Головна вкладка";
    }
}

// Визначаємо тип вкладки при завантаженні
determineTabType();

// Додавання обробника подій visibilitychange
document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "hidden") {
        // Викликаємо функцію для перевірки, чи це остання вкладка
        checkIfLastTab();
    }
});

// Визначаємо, якщо користувач закриває вкладку
window.addEventListener("beforeunload", function() {
    checkIfLastTab();
});