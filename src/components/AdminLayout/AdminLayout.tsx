import SanerNowLogo from 'components/common/SanerNowLogo/SanerNowLogo.component';
import styles from './AdminLayout.module.scss';
import { SideNavEleDataType, NavEleData, PropsType, SideNavEleData } from './data';
import { Link } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function AdminLayout({ children }: PropsType): JSX.Element {

  const location = useLocation();
  const [productType, setProductType] = useState('SannerNow');
  const [currentPathName, setCurrentPathName] = useState<string>('');

  useEffect(() => {
    setCurrentPathName(getCurrentPathName());
  }, [location]);

  function getCurrentPathName(): string {
    let pathName = '';
    NavEleData.forEach(ele => {
      if (ele.subRoutes.includes(location.pathname)) {
        pathName = ele.name;
      }
    });
    return pathName || 'Invalid URL';
  };

  const handleProductChange = (): void => {
    setProductType('SannerNow');
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.flexGroup}>
          <div className={styles.logo}>
            <SanerNowLogo size={35} />
          </div>
          <div className={styles.navLinks}>
            {NavEleData.map((ele, i) => {
              return (
                <Link to={ele.path} key={i} className={`${styles.mobileHide} ${currentPathName === ele.name && styles.active || ''}`}>
                  {ele.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.flexGroup}>
          <div className={styles.productContainer}>
            <Select
              value={productType}
              className={styles.productTypeSelect}
              onChange={handleProductChange}
            >
              <MenuItem value='SannerNow'>
                <span className={styles.menuIcon}>SN</span>
                <span className={styles.menuText}>SannerNow</span>
              </MenuItem>
            </Select>
          </div>
          <div className={styles.profile}></div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.sideNav}>
          <div className={styles.heading}>Account</div>
          {
            currentPathName != 'Invalid URL' && SideNavEleData?.[currentPathName as keyof SideNavEleDataType]?.map((data, i) => (
              <Link to={data.path} className={`${styles.sideNavEle} ${data.path === location.pathname && styles.active || ''}`} key={i}>
                <div className={styles.sideNavIcon}>{data.icon}</div>
                <div className={styles.sideNavText}>{data.name}</div>
              </Link>
            ))
          }
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
