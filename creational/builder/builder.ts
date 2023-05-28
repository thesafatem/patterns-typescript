enum ImageFormat {
	PNG = 'png',
	JPEG = 'jpeg',
}

interface IResolution {
	width: number;
	height: number;
}

interface IImageConvertion extends IResolution {
	format: ImageFormat;
}

class ImageConverter {
	private formats: ImageFormat[] = [];
	private resolutions: IResolution[] = [];

	addPng(): this {
		if (!this.formats.includes(ImageFormat.PNG)) {
			this.formats.push(ImageFormat.PNG);
		}
		return this;
	}

	addJpeg(): this {
		if (!this.formats.includes(ImageFormat.JPEG)) {
			this.formats.push(ImageFormat.JPEG);
		}
		return this;
	}

	addResolution(width: number, height: number): this {
		if (!this.resolutions.includes({ width, height })) {
			this.resolutions.push({ width, height });
		}
		return this;
	}

	convert(): IImageConvertion[] {
		const res: IImageConvertion[] = [];
		for (const format of this.formats) {
			for (const resolution of this.resolutions) {
				res.push({
					width: resolution.width,
					height: resolution.height,
					format: format
				});
			}
		}
		return res;
	}
}

const converter = new ImageConverter();

const result =
	converter
		.addJpeg()
		.addPng()
		.addResolution(100, 200)
		.addResolution(30, 70)
		.convert();

console.log(result);
