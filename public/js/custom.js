<script>
document.addEventListener("DOMContentLoaded", function () {
    const playerWrapper = document.getElementById("aplayer-wrapper");
    const toggleButton = document.getElementById("toggle-aplayer");

    toggleButton.addEventListener("click", function () {
        playerWrapper.classList.toggle("hidden");
        toggleButton.textContent = playerWrapper.classList.contains("hidden") ? "▲" : "☰";
    });
});
</script>