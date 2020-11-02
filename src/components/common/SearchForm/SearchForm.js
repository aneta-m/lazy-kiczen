import React, { useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import GrouppedList from '../GrouppedList/GrouppedList';
import Button from '../Button/Button';

const SearchForm = ({ hasSelect, selectList }) => {

    //select List i filteredCategories są z globalState

    // zaktualizować stany checkboxów, żeby utrzymywały się dłużej, były zależne od state

    const [filteredCategories, setFilteredCategories] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => console.log(filteredCategories));

    const [categoriesMappedWithCheckedProp, setCategoriesMappedWithCheckedProp] = useState(mapCategoriesWithFilters(selectList, filteredCategories));

    function handleChange(e) {
        setSearchText(e.target.value);
    }

    // po tym jak zrobie global state, trzeba przerobić funkcję, żeby miała filteredcategories i select list z global state

    function handleCheckboxChange(item) {
        const updatedFilters = updateFilteredCategories(filteredCategories, item);
        const updatedSelectList = mapCategoriesWithFilters(selectList, updatedFilters);
        setFilteredCategories(updatedFilters);
        setCategoriesMappedWithCheckedProp(updatedSelectList);
    }

    function updateFilteredCategories(filters, item) {
        const { id, groupId } = item;
        const groupIndex = filters.findIndex(filterItem => filterItem.categoryId === groupId);
        return (
            item.value ? addItem(filters, groupIndex, item) : removeItem(filters, groupIndex, id)
        );
    }

    function addItem(filters, groupIndex, item) {
        (groupIndex > -1 ? filters[groupIndex].categoryList.push(item.id) : filters.push({ categoryId: item.groupId, categoryList: [item.id] }));
        return filters;
    }

    function removeItem(filters, groupIndex, id) {
        const isLastItemInCategory = (filters[groupIndex].categoryList.length === 1);
        if (isLastItemInCategory) {
            filters.splice(groupIndex, 1);
        } else {
            const categories = filters[groupIndex].categoryList;
            const categoryIndex = categories.indexOf(id);
            categories.splice(categoryIndex, 1);
        }
        return filters;
    }

    function mapCategoriesWithFilters(categoriesList, filteredCategories) {
        return categoriesList.map(group => {
            const filteredGroupIndex = filteredCategories.findIndex(filteredItem => filteredItem.categoryId === group.categoryId);
            const isGroupInFilters = filteredGroupIndex > -1;

            group.list = group.list.map(category => {
                if (isGroupInFilters) {
                    const checked = filteredCategories[filteredGroupIndex].categoryList.indexOf(category.id) > -1;
                    return ({ ...category, checked: checked });
                }
                if (!isGroupInFilters) { return ({ ...category, checked: false }); }
            });

            return group;
        });
    }

    function submitSearch(e) {
        e.preventDefault();
        console.log("submit search");
    }


    if (hasSelect) {
        return (
            <form className="search-form search-form--has-select">
                <input className="input search-form__input" type="text" placeholder="Search for meals" value={searchText} onChange={handleChange} />
                <Dropdown renderBtn={{ text: "Choose filters", type: "bg-white" }}>
                    <GrouppedList
                        type="centered"
                        list={categoriesMappedWithCheckedProp}
                        definitions={{ title: "categoryName", itemsList: "list", groupId: "categoryId" }}
                        gaps="lg"
                        itemsConvertType="checkbox"
                        eventHandler={handleCheckboxChange}>
                    </GrouppedList>
                </Dropdown>
                <Button type="primary" onClick={submitSearch}>Search</Button>
            </form>
        );
    }
    return (
        <form className="search-form search-form--short">
            <input className="search-form__input input" type="text" placeholder="Search for meals"
                size="15" />
            <Button type="primary" onClick={submitSearch}><i
                className="fas fa-search btn__icon"></i></Button>
        </form>
    );
};

export default SearchForm;
