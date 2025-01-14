"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import css from "./style.module.css";
import { productsData } from "../utils";
import Image from "next/image";
import filtersIcon from "@/app/static/icons/shop/filtersMobile.svg";
import cn from "classnames";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import useCart from "@/hooks/useCart";
import Sortby from "./Sortby/Sortby";
import useColorsStore from "@/stores/useColorsStore";
import useSizesStore from "@/stores/useSizesStore";
import useStylesStore from "@/stores/useStylesStore";
import usePriceStore from "@/stores/usePriceStore";

const Products = ({ toggleFilters }) => {
  const router = useRouter();
  const { cart, addToCart } = useCart();
  const start = 0;
  let end = 8;
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const itemsPerPage = 9;
  const { selectedColors } = useColorsStore();
  const { selectedSizes } = useSizesStore();
  const { selectedStyles } = useStylesStore();
  const { priceValue } = usePriceStore();
  const [minPrice, maxPrice] = priceValue;

  useEffect(() => {
    const filterUpdatedProducts = products.filter((product) => {
      const isWithinPriceRange =
        product.price >= minPrice && product.price <= maxPrice;
      const isColorSelected =
        selectedColors.length === 0 ||
        product.colors.some((color) => selectedColors.includes(color));
      const isSizesSelected =
        selectedSizes.length === 0 ||
        product.sizes.some((size) => selectedSizes.includes(size));
      const isStylesSelected =
        selectedStyles.length === 0 ||
        (typeof product.category === "string" &&
          selectedStyles.includes(product.category));

      return (
        isWithinPriceRange &&
        isColorSelected &&
        isSizesSelected &&
        isStylesSelected
      );
    });

    setFilteredProducts(filterUpdatedProducts);
  }, [
    products,
    minPrice,
    maxPrice,
    selectedColors,
    selectedSizes,
    selectedStyles,
  ]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/products/products/?start=${start}&end=${end}`
      );
      setProducts(response.data);
      console.log("Products were successfully fetched!");
      console.log(response.data);
    } catch (error) {
      console.log("Error with fetching products!");
    }
  };

  const LoadMore = () => {
    end += 9;
    getProducts();
  };

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleSelect = (value, e) => {
    setSelectedValue(value);
    setIsOpenDropdown(false);
    let sortedProducts = [...filteredProducts];
    if (value === "Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === "New Arrivals") {
      sortedProducts.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    } else if (value === "Top Selling") {
      sortedProducts.sort((a, b) => b.sales - a.sales);
    } else if(value === "By Rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    setFilteredProducts(sortedProducts);
  };

  const countDiscount = (price, discount) => {
    const discountRate = discount / 100;
    return Math.round(price / (1 - discountRate));
  };

  const handleAddToCart = (item, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      rating: item.rating,
      availability_status: item.availability_status,
      discount: item.discount,
      description: item.description,
      colors: item.colors,
      sizes: item.sizes,
      category: item.category,
      sex: item.sex,
      created_at: item.created_at,
      updated_at: item.updated_at,
      quantity: item.quantity,
    });
  };

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage - 1;
    getProducts(start, end);
    handleSelect("Low to High");
  }, []);

  return (
    //{
    //  [css.add__width]: filteredProducts.length === 0,
    //}
    <div className={cn(css.products)}>
      <div className={css.products__params}>
        <h3 className={css.products__title}>{selectedValue}</h3>
        <Sortby handleSelect={handleSelect} toggleDropdown={toggleDropdown} setIsOpenDropdown={setIsOpenDropdown} isOpenDropdown={isOpenDropdown} />
        <Image
          className={css.products__icon}
          src={filtersIcon}
          alt="parameters icon"
          onClick={toggleFilters}
        />
      </div>
      {filteredProducts.length > 0 ? (
        <ul className={css.products__list}>
          {filteredProducts.map(
            ({
              id,
              title,
              image,
              price,
              rating,
              availability_status,
              discount,
              description,
              colors,
              sizes,
              category,
              sex,
            }) => (
              <li className={cn(css.products__item)} key={id}>
                <Link
                  className={css.product__link}
                  href={`/shop/${category}/${sex}/${id}`}
                >
                  <div
                    className={cn(css.image__wrapper, {
                      [css.not__available]:
                        availability_status === "not_available",
                    })}
                  >
                    <Image
                      className={css.products__image}
                      src={image}
                      alt={title}
                      width={270}
                      height={270}
                    />
                    {availability_status === "in_stock" && (
                      <button
                        className={cn({
                          [css.add__to__cart]:
                            availability_status === "in_stock",
                        })}
                        onClick={(e) =>
                          handleAddToCart(
                            {
                              id,
                              title,
                              image,
                              price,
                              rating,
                              availability_status,
                              discount,
                              description,
                              colors,
                              sizes,
                              category,
                              sex,
                            },
                            e
                          )
                        }
                      ></button>
                    )}
                  </div>
                  <div className={css.product__info}>
                    <p className={css.product__name}>{title}</p>
                    <p className={css.product__rating}>
                      <Rating
                        value={rating}
                        readOnly
                        style={{ maxWidth: 110 }}
                      />
                      <div>{rating}/5</div>
                    </p>
                    <div className={css.product__price}>
                      <p>${price}</p>
                      {discount !== 0 && (
                        <div className={css.discount__info}>
                          <p className={css.old__price}>
                            ${countDiscount(price, discount)}
                          </p>
                          <p className={css.discount__price}>-{discount}%</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>
      ) : (
        <h4 className={css.not__found}>Not products was found</h4>
      )}
      {filteredProducts.length > 0 ? (
        <div className={css.products__pagination}>
          <button className={css.pagination__button} onClick={LoadMore}>
            Load more
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Products;
