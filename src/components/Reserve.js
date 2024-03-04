import { Input } from "@chakra-ui/react";
import styles from "./reserve-table.module.css";

const ReserveTable = () => {
  return (
    <div className={styles.reservetable}>
      <div className={styles.reservetableChild} />
      <div className={styles.navigationBar}>
        <div className={styles.home}>Home</div>
        <div className={styles.about}>About</div>
        <div className={styles.menu}>Menu</div>
        <div className={styles.reservations}>Reservations</div>
        <div className={styles.orderOnline}>Order Online</div>
        <div className={styles.login}>Login</div>
        <img className={styles.logo2Icon} alt="" src="/logo-2@2x.png" />
      </div>
      <div className={styles.reservationSection}>
        <img
          className={styles.imagePlaceholderIcon}
          alt=""
          src="/image-placeholder@2x.png"
        />
        <div className={styles.reservations1}>Reservations</div>
        <div className={styles.generalInformation}>General Information</div>
        <div className={styles.formField}>
          <Input className={styles.formFieldChild} width="407px" w="407px" />
          <div className={styles.pleaseEnterDate}>Please enter Date</div>
          <div className={styles.date}>Date*</div>
          <img className={styles.calendarIcon} alt="" src="/calendar@2x.png" />
        </div>
        <div className={styles.formDropdown}>
          <Input className={styles.formFieldChild} width="407px" w="407px" />
          <div className={styles.pleaseEnterDate}>Please enter Time</div>
          <b className={styles.date1}>Time*</b>
          <img className={styles.formDropdownItem} alt="" src="/arrow-1.svg" />
        </div>
        <div className={styles.formDropdown1}>
          <Input className={styles.formFieldChild} width="407px" w="407px" />
          <div className={styles.pleaseEnterDate}>
            Please enter number of diners
          </div>
          <b className={styles.date1}>Number of Diners*</b>
          <img className={styles.formDropdownItem} alt="" src="/arrow-1.svg" />
        </div>
        <div className={styles.formDropdown2}>
          <Input className={styles.formFieldChild} width="407px" w="407px" />
          <div className={styles.pleaseEnterDate}>
            Please enter seating option
          </div>
          <b className={styles.date1}>Seating Option</b>
          <img className={styles.formDropdownItem} alt="" src="/arrow-1.svg" />
        </div>
        <div className={styles.formDropdown3}>
          <Input className={styles.formFieldChild} width="407px" w="407px" />
          <div className={styles.pleaseEnterDate}>Please enter occasion</div>
          <b className={styles.date1}>Occasion</b>
          <img className={styles.formDropdownItem} alt="" src="/arrow-1.svg" />
        </div>
        <div className={styles.formDropdown4}>
          <Input className={styles.formFieldChild} width="407px" w="407px" />
          <div className={styles.pleaseEnterDate}>Write comment</div>
          <b className={styles.date1}>Comment</b>
          <img
            className={styles.formDropdownChild5}
            alt=""
            src="/arrow-1.svg"
          />
        </div>
      </div>
      <section className={styles.footerNavigation}>
        <img
          className={styles.imagePlaceholderIcon1}
          alt=""
          src="/image-placeholder@2x.png"
        />
        <div className={styles.doormatNavigation}>Doormat Navigation</div>
        <div className={styles.homeAboutMenuContainer}>
          <p className={styles.address}>Home</p>
          <p className={styles.address}>About</p>
          <p className={styles.address}>Menu</p>
          <p className={styles.address}>Reservations</p>
          <p className={styles.address}>Order Online</p>
          <p className={styles.address}>Login</p>
        </div>
        <div className={styles.addressPhoneNumberContainer}>
          <p className={styles.address}>Address</p>
          <p className={styles.address}>Phone number</p>
          <p className={styles.address}>Email</p>
        </div>
        <div className={styles.addressPhoneNumberContainer1}>
          <p className={styles.address}>Address</p>
          <p className={styles.address}>Phone number</p>
          <p className={styles.address}>Email</p>
        </div>
        <div className={styles.contact}>Contact</div>
        <div className={styles.socialMediaLinks}>Social Media Links</div>
      </section>
      <div className={styles.contactSection}>
        <div className={styles.contactData}>Contact Data</div>
        <div className={styles.formDropdown5}>
          <Input className={styles.formFieldChild} width="407px" w="407px" />
          <div className={styles.pleaseEnterDate}>Please enter Name</div>
          <b className={styles.date1}>Name*</b>
          <img
            className={styles.formDropdownChild5}
            alt=""
            src="/arrow-1.svg"
          />
        </div>
        <div className={styles.formDropdown5}>
          <Input className={styles.formFieldChild} width="407px" w="407px" />
          <div className={styles.pleaseEnterDate}>Please enter your Email</div>
          <b className={styles.date1}>Email*</b>
          <img
            className={styles.formDropdownChild5}
            alt=""
            src="/arrow-1.svg"
          />
        </div>
        <div className={styles.formDropdown5}>
          <Input className={styles.formFieldChild} width="407px" w="407px" />
          <div className={styles.pleaseEnterDate}>
            Please enter your phone number
          </div>
          <b className={styles.date1}>Phone Number</b>
          <img
            className={styles.formDropdownChild5}
            alt=""
            src="/arrow-1.svg"
          />
        </div>
      </div>
      <div className={styles.submit}>
        <div className={styles.button}>
          <div className={styles.button1}>
            <div className={styles.buttonChild} />
            <b className={styles.button2}>Confirm Reservation</b>
          </div>
        </div>
      </div>
      <div className={styles.occasion}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/arrow-1.svg" />
          <b className={styles.button2}>Occasion</b>
          <img className={styles.drinkIcon} alt="" src="/drink.svg" />
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;
