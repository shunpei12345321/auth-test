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
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>app/page.tsx</code>
				</p>
				<div>
					<ThanksCardList thanks_cards={thanks_cards} />
				</div>
				<div>
					<ul>
						<li>
							<Link href="file-uploader" className="underline">
								File Uploader
							</Link>
						</li>
						<li>
							<Link href="qr-code-reader" className="underline">
								QR Code Reader
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer">
						By{" "}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<div className={styles.center}>
				<Image
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className={styles.grid}>
				
			</div>
		</main>
	);
}
