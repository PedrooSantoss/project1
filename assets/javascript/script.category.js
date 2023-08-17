// categoria possui varios produtos
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

// Produtos pertence a uma categoria => 1:1
class Category {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 0;
    }
    addCategory(name) {
        const id = this.nextCategoryId ++;
    }
}