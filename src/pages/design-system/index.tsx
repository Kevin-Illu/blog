import {
  ArrowRightIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

export default function DisignSystem() {
  return (
    <section className="container">
      <div>
        <h1>my design system</h1>
      </div>
      <div className="flex-col gap-3">
        <Palette />
        <Components />
        <Texts />
        <Grid />
      </div>
    </section>
  );
}

export const Palette = () => {
  return (
    <section>
      <h3>pallete</h3>
      <div className="flex-row gap-1">
        <div className="card bg-base"></div>
        <div className="card bg-subtle"></div>
      </div>
      <hr></hr>
    </section>
  );
};

export const Components = () => {
  return (
    <section>
      <h3>Components</h3>
      <div className="flex-row gap-1">
        <div className="card">menu item: normal state</div>
        <div className="card card--ghost">menu item: hover state</div>
        <div className="card card--solid">
          menu item: pressed or selected states
        </div>
      </div>
      <div className="flex-row gap-2">
        <div className="flex-co">
          <p className="text-2 text-color-2">Accent</p>
          <div className="flex-row gap-1">
            <button className="btn btn-primary">
              Next
              <ArrowRightIcon />
            </button>
            <button className="btn btn-secondary">
              Next
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="flex-col">
          <p className="text-2 text-color-2">Gray</p>
          <div className="flex-row gap-1">
            <button className="btn btn-primary-gray">
              Next
              <ArrowRightIcon />
            </button>
            <button className="btn btn-secondary-gray">
              Next
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="flex-col">
          <p className="text-2 text-color-2">Disabled</p>
          <div className="flex-row gap-1">
            <button disabled className="btn btn-primary">
              Next
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      <div>
        <p>Pills</p>
        <div className="flex-row gap-1">
          <div className="pill pill--info">Info Pill</div>
          <div className="pill pill--success">Success Pill</div>
          <div className="pill pill--warning">Warning Pill</div>
          <div className="pill pill--danger">Danger Pill</div>
        </div>
      </div>
      <div>
        <p>Callout</p>
        <div className="flex-row gap-1">
          <div className="callout callout--info">
            <InfoCircledIcon />
            Lorem ipsum dolor sit amet.
          </div>
          <div className="callout callout--danger">
            <ExclamationTriangleIcon />
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
      <hr></hr>
    </section>
  );
};

export const Texts = () => {
  return (
    <section>
      <div>
        <h3>Font sizes</h3>
        <div>
          <p className="text-4 text-accent-1">This text is tomato 11</p>
          <p className="text-4 text-base-1">This text is gray 11</p>
          <p className="text-4 text-accent-2">This text is tomato 12</p>
          <p className="text-4 text-base-2">This text is gray 12</p>
        </div>
      </div>

      <div>
        <h3>Heading Sizing</h3>
        <ol>
          <li>
            <h1>Almost before we knew it, we had left the ground..</h1>
          </li>
          <li>
            <h2>Almost before we knew it, we had left the ground..</h2>
          </li>
          <li>
            <h3>Almost before we knew it, we had left the ground..</h3>
          </li>
          <li>
            <h4>Almost before we knew it, we had left the ground..</h4>
          </li>
        </ol>
      </div>

      <div>
        <h3>Parragraph Sizing</h3>
        <ol>
          <li>
            <p className="text-7">
              Almost before we knew it, we had left the ground..
            </p>
          </li>
          <li>
            <p className="text-6">
              Almost before we knew it, we had left the ground..
            </p>
          </li>
          <li>
            <p className="text-5">
              Almost before we knew it, we had left the ground..
            </p>
          </li>
          <li>
            <p className="text-4">
              Almost before we knew it, we had left the ground..
            </p>
          </li>
          <li>
            <p className="text-3">
              Almost before we knew it, we had left the ground..
            </p>
          </li>
          <li>
            <p className="text-2">
              Almost before we knew it, we had left the ground..
            </p>
          </li>
          <li>
            <p className="text-1">
              Almost before we knew it, we had left the ground..
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export const Grid = () => {
  const posts = [
    {
      id: "1",
      title: "lorem IpsumLabore aliqua excepteur cillum.",
      description:
        "Culpa officia cillum esse sint excepteur officia ullamco ad ullamco. Amet est pariatur am. Consectetur qui fugiat cillum et ipsum proident. Animdo et est nostrud.",
      date: "10-24-2023",
    },
    {
      id: "2",
      title: "lorem IpsumLabore aliqua excepteur cillum.",
      description:
        "Culpa officia cillum esse sint excepteur officia ullamco ad ullamco. Amet est pariatur am. Consectetur qui  aliquip irure. Minim nostrud occaecat Lorem amet ullamco cupidatat aute proident voluptate reprehenderit est cillum ex consequat. Labore dolore aliqua do et est nostrud.",
      date: "10-24-2023",
    },
    {
      id: "3",
      title: "lorem IpsumLabore aliqua excepteur cillum.",
      description:
        "Culpa officia cillum esse sint excepteur officia ullamco ad ull nostrud occaecat Lorem amet ullamco cupidatat aute proident voluptate reprehenderit est cillum ex consequat. Labore dolore aliqua do et est nostrud.",
      date: "10-24-2023",
    },
    {
      id: "4",
      title: "lorem IpsumLabore aliqua excepteur cillum.",
      description:
        "Culpa officia cillum esse sint excepteur officia ullamco ad ullamco. Amet est pariatur am.  amet consectetur sunt ad elit magna nulla deserunt. Velit exercitation excepteur minim aliquip irure. Minim nostrud occaecat Lorem amet ullamco cupidatat aute proident voluptate reprehenderit est cillum ex consequat. Labore dolore aliqua do et est nostrud.",
      date: "10-24-2023",
    },
    {
      id: "5",
      title: "lorem IpsumLabore aliqua excepteur cillum.",
      description:
        "Culpa officia cillum esse sint excepteur officia ullamco ad ullamco. Amet est pariatur am.  proident. Anim officia nulla sunt amet consectetur sunt ad elit magna nulla deserunt. Velit exercitation excepteur minim aliquip irure. Minim nostrud occaecat Lorem amet ullamco cupidatat aute proident voluptate reprehenderit est cillum ex consequat. Labore dolore aliqua do et est nostrud.",
      date: "10-24-2023",
    },
  ];

  return (
    <section>
      <h3>Grid components</h3>
      <div className="grid gap-2">
        {posts.map((post) => (
          <div key={post.id} className="grid-item">
            <div className="grid-span--6">
              <p className="text-7 title font-sans">{post.title}</p>
            </div>
            <div className="grid-span--4">
              <p>{post.description}</p>
            </div>
            <div className="grid-span--2">
              <p>{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
