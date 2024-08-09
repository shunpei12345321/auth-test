import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import ThanksCardList from "./_components/thanks_card/list";
import { ThanksCardRepository } from "./_repositories/ThanksCard";

export const dynamic = "force-dynamic";

export default async function Home() {
	const thanks_cards = await ThanksCardRepository.findMany();
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				{/* <p>
					Get started by editing&nbsp;
					<code className={styles.code}>app/page.tsx</code>
				</p> */}
				<div>
					<ThanksCardList thanks_cards={thanks_cards} />
				</div>

				<div></div>
			</div>

			{/* <div className={styles.center}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div> */}

			<div className={styles.grid}></div>
		</main>
	);
}
