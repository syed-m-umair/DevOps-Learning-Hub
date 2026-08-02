document.addEventListener("DOMContentLoaded", () => {

    /* ================= COPY BUTTONS ================= */

    document.querySelectorAll(".copy-btn").forEach((btn) => {

        btn.addEventListener("click", async () => {

            const text = btn.getAttribute("data-copy") || "";

            try {

                await navigator.clipboard.writeText(text);

            } catch (err) {

                // Fallback for browsers without Clipboard API access
                const temp = document.createElement("textarea");
                temp.value = text;
                document.body.appendChild(temp);
                temp.select();
                document.execCommand("copy");
                document.body.removeChild(temp);

            }

            const originalLabel = btn.dataset.originalLabel || btn.textContent;
            btn.dataset.originalLabel = originalLabel;

            btn.textContent = "Copied!";
            btn.classList.add("copied");

            clearTimeout(btn._resetTimer);
            btn._resetTimer = setTimeout(() => {
                btn.textContent = originalLabel;
                btn.classList.remove("copied");
            }, 1500);

        });

    });


    /* ================= SEARCH FILTER ================= */

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const noResults = document.getElementById("noResults");
    const cards = Array.from(document.querySelectorAll(".command-card"));
    const sections = Array.from(document.querySelectorAll(".content > section[id]"));

    function filterCommands() {

        const query = searchInput.value.trim().toLowerCase();
        let anyVisible = false;

        sections.forEach((section) => {

            const sectionCards = Array.from(section.querySelectorAll(".command-card"));
            let sectionHasMatch = false;

            sectionCards.forEach((card) => {

                const haystack = (
                    card.getAttribute("data-search") + " " +
                    card.textContent
                ).toLowerCase();

                const matches = query === "" || haystack.includes(query);

                card.style.display = matches ? "" : "none";

                if (matches) {
                    sectionHasMatch = true;
                    anyVisible = true;
                }

            });

            section.style.display = sectionHasMatch ? "" : "none";

        });

        noResults.style.display = anyVisible ? "none" : "block";

    }

    if (searchInput) {
        searchInput.addEventListener("input", filterCommands);
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", filterCommands);
    }


    /* ================= SIDEBAR SCROLL-SPY ================= */

    const sidebarLinks = Array.from(document.querySelectorAll(".sidebar a"));

    function setActiveLink() {

        let currentId = sections[0] ? sections[0].id : null;
        const scrollPos = window.scrollY + 130;

        sections.forEach((section) => {

            if (section.offsetTop <= scrollPos) {
                currentId = section.id;
            }

        });

        sidebarLinks.forEach((link) => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentId
            );

        });

    }

    window.addEventListener("scroll", setActiveLink);
    setActiveLink();

});