<!DOCTYPE html>
<html>
<head>
    <title>Jewelry Management System</title>
    <style>
        .filter {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Jewelry Management System</h1>
    
    <form action="AddItemServlet" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="material">Material:</label>
        <input type="text" id="material" name="material" required><br>
        <label for="price">Price:</label>
        <input type="number" id="price" name="price" required><br>
        <button type="submit">Add Item</button>
    </form>

    <hr>

    <h2>Filters</h2>
    <div class="filter">
        <input type="checkbox" id="gold" name="material" value="Gold">
        <label for="gold">Gold</label>
    </div>
    <div class="filter">
        <input type="checkbox" id="silver" name="material" value="Silver">
        <label for="silver">Silver</label>
    </div>
    <div class="filter">
        <label for="priceRange">Price Range:</label>
        <select id="priceRange">
            <option value="0-500">$0 - $500</option>
            <option value="501-1000">$501 - $1000</option>
            <option value="1001-1500">$1001 - $1500</option>
            <option value="1501-2000">$1501 - $2000</option>
        </select>
    </div>

    <hr>

    <h2>Inventory</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Material</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="item" items="${inventory}">
                <tr>
                    <td>${item.name}</td>
                    <td>${item.material}</td>
                    <td>${item.price}</td>
                </tr>
            </c:forEach>
        </tbody>
    </table>

    <hr>

    <form action="SearchItemServlet" method="get">
        <label for="search">Search by Name:</label>
        <input type="text" id="search" name="searchName" required>
        <button type="submit">Search</button>
    </form>
</body>
</html>
