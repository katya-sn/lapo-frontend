import { BigSectionsHeader } from "../../components/BigSectionsHeader";
import { BreadCrumb } from "../../components/BreadCrumb";
import "./Contacts.scss";

export const Contacts = () => {
  return (
    <div className="contacts">
      <BreadCrumb title1="Контакти" />
      <BigSectionsHeader text={["Супер", "Друзі"]} />
      <div className="contacts__info">
        <div className="contacts__text">
          Київська обл., м. Буча
          <br /> Жовтневий пров., 44
        </div>
        <div className="contacts__text">
          Середа-неділя
          <br /> з 11:00 до 16:00
        </div>
        <div className="contacts__text">
          Санітарні дні-
          <br /> понеділок-вівторок
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.1699471662687!2d30.215195676418347!3d50.54960948021937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b31bef06fbd91%3A0x8a12336f2cab1314!2z0JbQvtCy0YLQvdC10LLQuNC5INC_0YDQvtCy0YPQu9C-0LosIDQ0LCDQkdGD0YfQsCwg0JrQuNGX0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMDgyOTI!5e0!3m2!1suk!2sua!4v1717399420901!5m2!1suk!2sua"
        width="1344"
        height="455"
        className="contacts__map"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contacts__links">
        <div className="contacts__links__item">
          <div className="contacts__links__icons">
            <a href="tel:+380935555555">
              <div className="icon icon-phone" />
            </a>
          </div>
          <p className="contacts__links__text">+38 093 555-55-55</p>
        </div>

        <div className="contacts__links__item">
          <div className="contacts__links__icons">
        
            <a href="viber://chat?number=380677777777">
              <div className="icon icon-viber" />
            </a>
            <a
              href="https://t.me/380677777777"
              className="contacts__links__circle"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5525 2.99691C19.3117 3.01443 19.0754 3.07091 18.8527 3.16416H18.8497C18.636 3.24891 17.6197 3.67641 16.0747 4.32441L10.5382 6.65616C6.56547 8.32866 2.66022 9.97566 2.66022 9.97566L2.70672 9.95766C2.70672 9.95766 2.43747 10.0462 2.15622 10.2389C1.98246 10.3495 1.83295 10.4941 1.71672 10.6642C1.57872 10.8667 1.46772 11.1764 1.50897 11.4967C1.57647 12.0382 1.92747 12.3629 2.17947 12.5422C2.43447 12.7237 2.67747 12.8084 2.67747 12.8084H2.68347L6.34572 14.0422C6.50997 14.5694 7.46172 17.6984 7.69047 18.4192C7.82547 18.8497 7.95672 19.1189 8.12097 19.3244C8.20047 19.4294 8.29347 19.5172 8.40522 19.5877C8.46331 19.6215 8.52526 19.6481 8.58972 19.6672L8.55222 19.6582C8.56347 19.6612 8.57247 19.6702 8.58072 19.6732C8.61072 19.6814 8.63097 19.6844 8.66922 19.6904C9.24897 19.8659 9.71472 19.5059 9.71472 19.5059L9.74097 19.4849L11.9032 17.5162L15.5272 20.2964L15.6097 20.3317C16.365 20.6632 17.13 20.4787 17.5342 20.1532C17.9415 19.8254 18.0997 19.4062 18.0997 19.4062L18.126 19.3387L20.9265 4.99191C21.006 4.63791 21.0262 4.30641 20.9385 3.98466C20.848 3.65903 20.639 3.37897 20.3527 3.19941C20.1123 3.05325 19.8335 2.9827 19.5525 2.99691ZM19.4767 4.53441C19.4737 4.58166 19.4827 4.57641 19.4617 4.66716V4.67541L16.6875 18.8729C16.6755 18.8932 16.6552 18.9374 16.5997 18.9817C16.5412 19.0282 16.4947 19.0574 16.251 18.9607L11.8185 15.5624L9.14097 18.0029L9.70347 14.4104L16.9455 7.66041C17.244 7.38291 17.1442 7.32441 17.1442 7.32441C17.1652 6.98391 16.6935 7.22466 16.6935 7.22466L7.56147 12.8819L7.55847 12.8669L3.18147 11.3932V11.3902L3.17022 11.3879C3.17789 11.3854 3.1854 11.3824 3.19272 11.3789L3.21672 11.3669L3.23997 11.3587C3.23997 11.3587 7.14822 9.71166 11.121 8.03916C13.11 7.20141 15.114 6.35766 16.6552 5.70666C17.5693 5.32191 18.4843 4.93941 19.4002 4.55916C19.4617 4.53516 19.4325 4.53441 19.4767 4.53441Z"
                  fill="#ff7658"
                />
              </svg>
            </a>
          </div>
          <p className="contacts__links__text">+38 067 777-77-77</p>
        </div>

        <div className="contacts__links__item">
          <a
            href="mailto:vuso_lapo_hvist@gmail.com"
            className="contacts__links__circle"
          >
            <div className="icon icon-mail"></div>
          </a>
          <p className="contacts__links__text">vuso_lapo_hvist@gmail.com</p>
        </div>
      </div>
    </div>
  );
};