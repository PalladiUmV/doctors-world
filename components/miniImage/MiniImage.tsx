import { useState } from 'react'

import Image from 'next/image'
import cross from '../../images/cross.png'

import s from '../../styles/miniImage.module.scss'
import clsx from "classnames";

import { MiniImageProps } from '../types/types';



const MiniImage = ({ item, index }: MiniImageProps) => {
	const { title, src } = item;


	const [popup, setPopup] = useState<string>('');
	const [isPopup, setIsPopup] = useState<boolean>(false);


	const showDescription = (title: string): void => {
		setPopup(title);
		setIsPopup(true);
	}
	const hidePopup = (): void => {
		setIsPopup(false);
	}


	return (
		<div
			className={s[`smallImage__${index + 1}`]}
			onPointerEnter={() => showDescription(title)}
			onPointerLeave={hidePopup}
		>
			<div className={s.cross}>
				<Image src={cross} alt='cross' />
			</div>
			<Image src={src} alt={title} />
			<p className={clsx(s.popup, isPopup ? s[`popup_active${index + 1}`] : '')}>
				{isPopup ? popup : null}
			</p>
		</div >
	)
}

export default MiniImage