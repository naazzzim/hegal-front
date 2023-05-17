import styles from "@/styles/Home.module.css";
import ReadMoreCard from "./ReadMoreCard";

const ReadMoreData = [
  {
    icon: "/icons/calculator.svg",
    title: "CORPORATE TAX ",
    description:
      "Corporate Tax is a form of direct tax levied on the net income or profit of corporations and other businesses.",
    route: "#",
  },
  {
    icon: "/icons/cash.svg",
    title: "GoAML",
    description:
      "UAE's Financial Intelligence Unit (FIU) launched a new anti-money laundering platform called goAML in UAE with the aim to regulate and control organized financial crimes",
    route: "#",
  },
  {
    icon: "/icons/bank.svg",
    title: "Account & Auditing ",
    description:
      "Accountants and auditors prepare and examine financial records, identify potential areas of opportunity and risk, and provide solutions for businesses and individuals. ",
    route: "#",
  },
];

const ReadMore = () => {
  return (
    <section className={styles.readMore}>
      {ReadMoreData.map((x) => (
        <ReadMoreCard item={x} />
      ))}
    </section>
  );
};

export default ReadMore;
