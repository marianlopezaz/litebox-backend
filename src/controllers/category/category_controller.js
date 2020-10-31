import Category from "../../models/category";

export async function getCategories() {
    const CATEGORIES = await Category.find();
    return CATEGORIES;
}
