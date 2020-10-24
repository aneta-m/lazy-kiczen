import React, { Fragment } from 'react';
import Button from '../Button/Button';
import InlineList from '../InlineList/InlineList';
import Collapsible from '../Collapsible/Collapsible';
import Text from '../Text/Text';
import Heading from '../Heading/Heading';

// utworzyć elementy card i sprawdzić czy style z card.scss dzialają

const RecipeCard = ({ isExpandable, item }) => {

    const { asideText, title, categories, url } = item;

    const topContent = asideText ? <Text color="light" size="sm" padding="bottom-sm">{asideText}</Text> : "";
    const headerElement = <Heading size="m" weight="normal" padding="bottom-xs">{title}</Heading>;
    const categoriesJoined = categories.join(", ");
    const categoriesElement = <Text padding="bottom">{categoriesJoined[0].toUpperCase() + categoriesJoined.slice(1)}</Text>;
    const bottomContent = <Fragment>
        {categoriesElement}
        <InlineList hasSeparators>
            <Button type="text-secondary" padding="none" text="bold" leftIcon="fas fa-plus" id="1" onClick={(e) => e.stopPropagation()}>ZAPLANUJ</Button>
            <Button type="text-grey" padding="none" text="bold" leftIcon="fas fa-pencil-alt" id="2" >EDYTUJ</Button>
            <Button type="text-primary" padding="none" text="bold" leftIcon="fas fa-arrow-right" id="3">URL</Button>
        </InlineList>
    </Fragment>;


    return (
        <div className="card">
            {isExpandable ?
                <Collapsible topContent={topContent} header={headerElement}>{bottomContent}</Collapsible>
                :
                <Fragment>
                    {topContent}
                    {headerElement}
                    {bottomContent}
                </Fragment>
            }
        </div>
    );
};

export default RecipeCard;
