function filterProducts(category) {
    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function (product) {
        if (
            category === "all" ||
            product.dataset.category === category
        ) {
            product.style.display = "";

        } else {
            product.style.display =
                "none";
        }
    });
}