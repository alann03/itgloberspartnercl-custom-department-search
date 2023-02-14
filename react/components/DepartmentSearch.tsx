import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql';
import { useCssHandles } from 'vtex.css-handles';

import DepartmentGroup from './DepartmentGroup';
import { SearchBar } from 'vtex.store-components';

const DepartmentSearch = () => {
    const { data, loading } = useQuery(QUERY_VALUE)
    const [slug, setSlug] = useState("");

    const CSS_HANDLES = [
      "searchBar__container"
    ]

    const handles = useCssHandles(CSS_HANDLES)  

    return loading
        ?
        <div>Loading...</div>
        :
        <div className={handles["searchBar__container"]}>
            <SearchBar 
              customSearchPageUrl={slug} 
              placeholder="Encontrá lo que buscás" 
              displayMode="search-and-clear-buttons" 
            />
            <DepartmentGroup 
              departments={data?.categories[0]?.children} 
              handleSetSlug={setSlug} 
            />
        </div>
}

export default DepartmentSearch;