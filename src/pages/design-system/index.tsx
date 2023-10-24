import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function DisignSystem() {
  return (
    <section className="container">
      <div>
        <h1 className="">my design system</h1>
      </div>
      <div className="flex-col gap-3">
        <Palette />
        <Components />
        <Texts />
      </div>
    </section>
  );
}

export const Palette = () => {
  return (
    <section>
      <h3>Palete</h3>
      <div className="flex-row">
        <div className="box bg-base"></div>
        <div className="box bg-subtle"></div>
      </div>
      <hr></hr>
    </section>
  );
};

export const Components = () => {
  return (
    <section>
      <h3>3-5: Component backgrounds, 6-8: Borders, 9-10: Solid background</h3>
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
      <hr></hr>
    </section>
  );
};

export const Texts = () => {
  return (
    <section>
      <div>
        <h3>11-12: Text</h3>
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