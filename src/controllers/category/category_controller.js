import Category from "../../models/category";

export async function getCategories() {
    const CATEGORIES = await Category.find();
    return CATEGORIES;
}

export async function getCategory(id) {
    const CATEGORY = await Category.findById(id)
    return CATEGORY;
}
