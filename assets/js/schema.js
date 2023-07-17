class Project {
      constructor(_id, Heading, Title, ShortDescription, Duration, Technologies, KeyFeatures, Additional, Image) {
            this._id = _id;
            this.Heading = Heading;
            this.Title = Title;
            this.ShortDescription = ShortDescription;
            this.Duration = Duration;
            this.Technologies = Technologies;
            this.KeyFeatures = KeyFeatures;
            this.Additional = Additional;
            this.Image = Image;
      }
}

class Technology {
      constructor(title, fileName) {
            this.title = title;
            this.fileName = fileName;
      }
}

class Feature {
      constructor(title, Description) {
            this.title = title;
            this.Description = Description;
      }
}

class Info {
      constructor(title, href) {
            this.title = title;
            this.href = href;
      }
}