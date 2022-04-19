import React from 'react'
import Logo from '../assets/icons/Camper.svg'
import Downarrow from '../assets/icons/Vector.svg'
import Kart from '../assets/icons/kart.svg'
import User from '../assets/icons/user.svg'
import { useState } from 'react'
import MotorDropdown from './MotorDropdown'
import { Select } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const styles = {
    wrapper:'flex items-center justify-between px-[2rem] relative',
    logo: 'flex px-10 py-[2rem]',
    navWrap: 'w-[60rem] flex items-center justify-between',
    linkWrap: 'font-Montserrat h-[4rem] flex',
    link: ' flex text-main text-base items-center px-5 py-2 rounded-xl gap-3 hover:bg-linkbg cursor-pointer',
    itemsWrap: 'flex items-center cursor-pointer',
}

const Navbar = () => {
    const [active, setActive] = useState(false)
    const {Option} = Select
  return (
    <div className={styles.wrapper}>
        <div className={styles.logo}><Logo /></div>
        <div className={styles.navWrap}>
            <div className={styles.linkWrap}>
                <div onMouseEnter={() => setActive (true)} onMouseLeave={() => setActive (false)} className={styles.link}>Motor <Downarrow /></div>
                {active &&
                <div onMouseEnter={() => setActive (true)} onMouseLeave={() => setActive (false)} className='absolute top-[5rem] flex items-center justify-center right-[.05rem]  w-full h-[30vh]'>
                    <MotorDropdown />
                </div>
                }
            </div>
            <div className={styles.linkWrap}>
                <div onMouseEnter={() => setActive (true)} onMouseLeave={() => setActive (false)} className={styles.link}>Caravan<Downarrow /></div>
            </div>
            <div className={styles.linkWrap}>
                <div onMouseEnter={() => setActive (true)} onMouseLeave={() => setActive (false)} className={styles.link}>Tuning<Downarrow /></div>
            </div>
            <div className={styles.linkWrap}>
                <div onMouseEnter={() => setActive (true)} onMouseLeave={() => setActive (false)} className={styles.link}>Used Car<Downarrow /></div>
            </div>
            <div className={styles.linkWrap}>
                <div className={styles.link}>Camping Place</div>
            </div>
        </div>
        <div className={styles.itemsWrap}>
            <div className='flex items-center px-4 gap-2 text-lg'><Kart /></div>
            <div className='flex items-center px-4 gap-2 text-lg'><User /></div>
            <Select defaultValue="Eng" style={{ width: 70 }} bordered={false}>
                <Option value="Kor">Kor</Option>
                <Option value="Eng">Eng</Option>
            </Select>
        </div>
    </div>
  )
}

export default Navbar