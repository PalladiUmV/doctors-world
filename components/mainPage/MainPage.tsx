import s from '../../styles/home.module.scss'

import Image, { StaticImageData } from 'next/image'
import adult from '../../images/adult.png'
import kid from '../../images/kid.png'
import middleImage from '../../images/middleImage.png'
import one from '../../images/one.png'
import three from '../../images/three.png'
import five from '../../images/five.png'
import six from '../../images/six.png'
import seven from '../../images/seven.png'
import nine from '../../images/nine.png'
import eleven from '../../images/eleven.png'
import twelve from '../../images/twelve.png'
import MiniImage from '../miniImage/MiniImage'


export interface IArrayImages {
	title: string;
	src: StaticImageData
}

const mainPage = () => {

	const images = [
		{
			title: 'Ограниченная способность поднимать руки и переносить предметы',
			src: one,
		},
		{
			title: 'Нарушения жевания и глотания',
			src: three,
		},
		{
			title: 'Дыхательная недостаточность/ респираторная дисфункция',
			src: five,
		},
		{
			title: 'Неспособность бегать, изменение походки',
			src: six,
		},
		{
			title: 'Контрактура суставов',
			src: seven,
		},
		{
			title: 'Вывих бедра',
			src: nine,
		},
		{
			title: 'Утомляемость',
			src: eleven,
		},
		{
			title: 'Сколиоз',
			src: twelve,
		},
	];

	return (
		<div className={s.globalContainer}>
			<div className={s.container}>
				<div className={s.container__title}>
					<div>А вдруг СМА?</div>
				</div>

				<div className={s.container__subTitle}>
					<div>Выберите, кто Ваш пациент:</div>
				</div>

				<div className={s.choisePatient}>

					<div className={s.adult}>

						<div className={s.adult__title}>
							<h3>Взрослый</h3>
						</div>

						<div className={s.adult__image}>
							<Image src={adult} alt="adult" width={300} height={300} />
						</div>

						<div className={s.adult__text}>
							<p>
								Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.
							</p>
						</div>

						<div className={s.adult__text}>
							<p>
								По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.
							</p>
						</div>

						<div className={s.adult__text}>
							<p>
								По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.
							</p>
						</div>
					</div>
					<div className={s.kid}>

						<div className={s.kid__title}>
							<h3>Ребенок</h3>
						</div>

						<div className={s.kid__image}>
							<Image src={kid} alt="kid" width={300} height={300} />
						</div>

						<div className={s.kid__text}>
							Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
							движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
							осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
							в отношении наличия СМА.
						</div>

						<div className={s.kid__text}>
							Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
							терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
							дегенерации при прогрессировании заболевания
						</div>
					</div>
				</div>

				<div className={s.question}>
					Сообщает ли один из ваших пациентов о следующих симптомах?
					<span>
						<sub>
							(нажмите на любую иконку и узнайте больше)
						</sub>
					</span>
				</div>

				<div className={s.middleImages}>
					<div className={s.bigImage}>
						<Image src={middleImage} alt='qwerty' />
						{
							images.map((item: IArrayImages, index: number) => {
								return <MiniImage item={item} index={index} key={item.title} />
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default mainPage;