import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=a8693c98-e820-425a-948f-17952a243766" type="text/javascript"></script>
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}
