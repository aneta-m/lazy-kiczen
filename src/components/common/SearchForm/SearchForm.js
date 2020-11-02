import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import GrouppedList from '../GrouppedList/GrouppedList';
import Button from '../Button/Button';

const SearchForm = ({ hasSelect, selectList }) => {

    //select List i filteredItems są z globalState

    const [filteredItems, setFilteredItems] = useState([]);
    const [searchText, setSearchText] = useState("");


    const categoriesMappedWithCheckedProp = mapCategoriesWithFilters(selectList, filteredItems);
    const [categoriesMapped, setCategoriesMapped] = useState(categoriesMappedWithCheckedProp);

    function handleChange(e) {
        setSearchText(e.target.value);
    }

    // po tym jak zrobie global state, trzeba przerobić funkcję, żeby miała filteredItems i select list z global state
    function handleCheckboxChange(item) {
        const updatedFilters = updateFilteredItems(filteredItems, item);
        const updatedSelectList = mapCategoriesWithFilters(selectList, updatedFilters);
        setFilteredItems(updatedFilters);
        setCategoriesMapped(updatedSelectList);
    }

    function updateFilteredItems(filters, item) {
        const { id, groupId } = item;
        const groupIndex = filters.findIndex(filterItem => filterItem.categoryId === groupId);
        return (
            item.value ? addItem(filters, groupIndex, item) : removeItem(filters, groupIndex, id)
        );
    }

    function addItem(filters, groupIndex, item) {
        (groupIndex > -1 ?
            filters[groupIndex].categoryList.push(item.id) :
            filters.push({ categoryId: item.groupId, categoryList: [item.id] }));
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

    function mapCategoriesWithFilters(categoriesList, filteredItems) {
        return categoriesList.map(group => {
            const filteredGroupIndex = filteredItems.findIndex(filteredItem => filteredItem.categoryId === group.categoryId);
            const isGroupFiltered = filteredGroupIndex > -1;

            group.list = group.list.map(category => {
                if (isGroupFiltered) {
                    const isChecked = filteredItems[filteredGroupIndex].categoryList.some((id) => category.id === id);
                    return ({ ...category, checked: isChecked });
                }
                return ({ ...category, checked: false });
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
                        list={categoriesMapped}
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
