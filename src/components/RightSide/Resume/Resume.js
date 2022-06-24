import React from "react"
import { List } from "react-feather"

import * as styles from "./resume.module.scss"

const Resume = () => {
  return (
    <section className="ptPage">
      <div className="ptContent ptContentFull}">
        <div className="ptScrollPdd">
          <div className="mainTitle">
            <span className="headingText">
              <List size={38} />
              My Resume
            </span>
          </div>
          <ul className={`${styles.timeLine} ${styles.timeLineCentered} ${styles.expTimeLine}`}>
            <li className={`${styles.timeLineItem} ${styles.period}`}>
              <div className={styles.timeLineInfo}></div>
              <div
                className={`${styles.timeLineMarker} ${styles.expTitle}`}
              ></div>
              <div className={styles.timeLineContent}>
                <h2 className={styles.timeLineTitle}>Experience</h2>
              </div>
            </li>
            <li className={styles.timeLineItem}>
              <div className={styles.timeLineInfo}>
                <span>2020 - Present</span>
              </div>
              <div className={styles.timeLineMarker}></div>
              <div className={styles.timeLineContent}>
                <h3 className={styles.timeLineTitle}>Front-End Developer</h3>
                <p>
                  Excepteur eiusmod ea velit dolor sunt reprehenderit commodo
                  irure. Aliquip ullamco reprehenderit pariatur fugiat magna
                  tempor nisi qui. Anim fugiat sint ex ea. Et ipsum laboris
                  nulla incididunt Lorem. Ullamco cupidatat proident duis
                  commodo. Enim aute eu commodo irure sit aliqua dolor veniam
                  occaecat cillum duis. Ad ullamco nisi enim nostrud in laboris
                  elit sint.
                </p>
              </div>
            </li>

            <li className={styles.timeLineItem}>
              <div className={styles.timeLineInfo}>
                <span>2020 - Present</span>
              </div>
              <div className={styles.timeLineMarker}></div>
              <div className={styles.timeLineContent}>
                <h3 className={styles.timeLineTitle}>Front-End Developer</h3>
                <p>
                  Excepteur eiusmod ea velit dolor sunt reprehenderit commodo
                  irure. Aliquip ullamco reprehenderit pariatur fugiat magna
                  tempor nisi qui. Anim fugiat sint ex ea. Et ipsum laboris
                  nulla incididunt Lorem. Ullamco cupidatat proident duis
                  commodo. Enim aute eu commodo irure sit aliqua dolor veniam
                  occaecat cillum duis. Ad ullamco nisi enim nostrud in laboris
                  elit sint.
                </p>
              </div>
            </li>

            <li className={styles.timeLineItem}>
              <div className={styles.timeLineInfo}>
                <span>2020 - Present</span>
              </div>
              <div className={styles.timeLineMarker}></div>
              <div className={styles.timeLineContent}>
                <h3 className={styles.timeLineTitle}>Front-End Developer</h3>
                <p>
                  Excepteur eiusmod ea velit dolor sunt reprehenderit commodo
                  irure. Aliquip ullamco reprehenderit pariatur fugiat magna
                  tempor nisi qui. Anim fugiat sint ex ea. Et ipsum laboris
                  nulla incididunt Lorem. Ullamco cupidatat proident duis
                  commodo. Enim aute eu commodo irure sit aliqua dolor veniam
                  occaecat cillum duis. Ad ullamco nisi enim nostrud in laboris
                  elit sint.
                </p>
              </div>
            </li>

            <li className={styles.timeLineItem}>
              <div className={styles.timeLineInfo}>
                <span>2020 - Present</span>
              </div>
              <div className={styles.timeLineMarker}></div>
              <div className={styles.timeLineContent}>
                <h3 className={styles.timeLineTitle}>Front-End Developer</h3>
                <p>
                  Excepteur eiusmod ea velit dolor sunt reprehenderit commodo
                  irure. Aliquip ullamco reprehenderit pariatur fugiat magna
                  tempor nisi qui. Anim fugiat sint ex ea. Et ipsum laboris
                  nulla incididunt Lorem. Ullamco cupidatat proident duis
                  commodo. Enim aute eu commodo irure sit aliqua dolor veniam
                  occaecat cillum duis. Ad ullamco nisi enim nostrud in laboris
                  elit sint.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Resume
