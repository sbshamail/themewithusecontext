import React, { useEffect, useState } from 'react';
import FormMuiDrawer from 'src/common/drawer/FormMuiDrawer';

const useOpenDrawer = ({
  Form,
  title,
  position = 'right',
  apidomain,
  multiSelected,
  rows,
  formProps,
  removeSelection,
  api,
  fetchData
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const OpenDrawer = () => {
    return (
      isDrawerOpen && (
        <>
          <FormMuiDrawer
            open={isDrawerOpen}
            toggle={toggleDrawer}
            anchor={position}
            drawerTitle={title}
            Form={Form}
            apidomain={apidomain}
            formProps={formProps}
            rows={multiSelected === true ? rows : rows[0]}
            removeSelection={removeSelection}
            api={api}
            fetchData={fetchData}
          />
        </>
      )
    );
  };
  return { OpenDrawer, toggleDrawer };
};

export default useOpenDrawer;
