// import React from 'react';
import subStyles from '../../../common/styles/Subpage.module.css';
import React, { useState,useEffect } from 'react';

import DataGrid, {
    Column,
    FilterRow,
    Grouping,
    GroupPanel,
    HeaderFilter,
    Pager,
    Paging,
    Selection,
    SearchPanel
  } from 'devextreme-react/data-grid';
  
  import { sales, selectedKeys } from './generator';
  import axios from 'axios';
  
  const InfoUsers=()=> {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
      const getUsers=async()=>{
         const users_=await axios.get('http://localhost:8000/user/profile/all');
         console.log(users_.data.data);

         setUsers(users_.data.data);
      }
      getUsers();
    },[])
    return (
        <div className={subStyles.subpage}>
            <div className={subStyles.subpage__title}>
                User information
            </div>
            <div className={subStyles.subpage__body}>
            <DataGrid
          dataSource={users?users:null}
          allowColumnReordering={true}
          defaultSelectedRowKeys={selectedKeys}
        >
          <GroupPanel visible={true} />
          <Grouping autoExpandAll={true} />
          <FilterRow visible={true} applyFilter='onClick'/>
          <HeaderFilter visible={true}/>
          <Selection mode={'multiple'} />
          <SearchPanel visible={true}
            width={240}
            placeholder="Search..." />
        
          {/* <Column
            dataField={'orderId'}
            caption={'Order ID'}
            allowSorting={false}
            allowFiltering={true}
            allowGrouping={false}
            allowReordering={false}
            width={100}
          />
          <Column dataField={'city'}  />
          <Column dataField={'country'} sortOrder={'asc'} />
          <Column dataField={'region'} groupIndex={0} />
          <Column
              dataField={'date'}
              dataType={'date'}
              selectedFilterOperation={'>='}
              filterValue={'2013/04/01'}
              width={150}
          />
          <Column
              dataField={'amount'}
              format={'currency'}
              selectedFilterOperation={'>='}
              filterValue={1000}
              width={100}
          />         */}
  
          <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} />
          <Paging defaultPageSize={10} />
        </DataGrid>
            </div>
        </div>
    )
}

export default InfoUsers;


  // class Example extends React.Component {
    
  
  //   render() {
  //     return (
       
  //     );
  //   }
  // }

  // export default Example;


