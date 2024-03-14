 
    // Dummy product data (you can replace it with your actual data)
    var products = [
      { name: "Product 1", category: "Hats", price: "$10", ImageUrl: "https://mcdn2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2024/24CMCW.MU002.2.jpg" },
      { name: "Product 2", category: "Shirts", price: "$20", ImageUrl: "https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2023/84sw.dt002.1.jpg" },
      { name: "Product 3", category: "Pants", price: "$15", ImageUrl: "https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/June2023/Short_7in_Power_Xam_Dam_1.jpg" },
      { name: "Product 4", category: "Shoes", price: "$50", ImageUrl: "https://product.hstatic.net/1000312752/product/z4204314965010_3df099002e8301f563a52e3ccdbf2858_855039d96eb14dc3a5e8605ae0aef9c0.jpg" },
      //{ name: "Product 5", category: "Shirts", price: "$25" },
      //{ name: "Product 6", category: "Hats", price: "$30" },
      //{ name: "Product 7", category: "Pants", price: "$22" },
      //{ name: "Product 8", category: "Shoes", price: "$40" },
      //{ name: "Product 9", category: "Shirts", price: "$35" },
      //{ name: "Product 10", category: "Hats", price: "$45" },

      // Add more products here
    ];

    // Function to render products
    function renderProducts(products) {
      var productList = $('#product-list');
      productList.empty();

      products.forEach(function (product) {
        productList.append(`
          <div class="col-lg-3 col-md-4 col-sm-6">
           <div class=>

            <div class="product-box">
              <div class="product">
              <img src="${product.ImageUrl}" class="img-fluid" alt="Product Image">
              </div>

              
              <!-- Price -->
              
            </div>
            <div class="price">
                <p>Price: ${product.price}</p>
                
              </div>
              </div>


            </div>
          </div>
        `);
      });
    }

    // Initial rendering
    renderProducts(products);

    // Event listener for color buttons
    $('.btn-color').click(function () {
      var selectedColor = $(this).data('color');
      // Handle color selection
    });

    // Function to render pagination
    function renderPagination(totalPages) {
      var pagination = $('#pagination');
      pagination.empty();

      for (var i = 1; i <= totalPages; i++) {
        pagination.append(`<li class="page-item"><a class="page-link" href="#">${i}</a></li>`);
      }
    }

    // Function to handle category filter
    $('#category-filter').change(function () {
      var selectedCategory = $(this).val();
      var filteredProducts = products.filter(function (product) {
        return selectedCategory === '' || product.category === selectedCategory;
      });
      renderProducts(filteredProducts);
    });

    // Initial rendering
    renderProducts(products);
    renderPagination(5); // Assuming there are 5 pages
    /*banner*/
    let currentBannerIndex = 0;
    const banners = document.querySelectorAll('.banner');

    function showBanner(index) {
      if (index < 0) {
        currentBannerIndex = banners.length - 1;
      } else if (index >= banners.length) {
        currentBannerIndex = 0;
      }

      banners.forEach((banner, i) => {
        if (i === currentBannerIndex) {
          banner.style.display = 'block';
        } else {
          banner.style.display = 'none';
        }
      });
    }

    function nextBanner() {
      currentBannerIndex++;
      showBanner(currentBannerIndex);
    }

    function prevBanner() {
      currentBannerIndex--;
      showBanner(currentBannerIndex);
    }

    // Auto change banner every 3 seconds
    setInterval(nextBanner, 3000);

    // Show the first banner initially
    showBanner(currentBannerIndex);









