<template>
  <div class="zhanghu">
    <div class="main-header">
      <el-button
        type="primary"
        @click="isshow = false"
        style="margin-left: 90px"
        >面试通知</el-button
      >
      <el-button type="success" @click="isshow = true">面试评价</el-button>
    </div>
    <div v-show="isshow == false" class="content">
      <el-form
        style="text-align: left"
        ref="form"
        :model="form"
        label-width="90px"
      >
        <el-form-item label="收件人:">
          <el-input style="width: 40%" v-model="form.addressee"></el-input>
        </el-form-item>
        <el-form-item label="发送标题:">
          <el-input style="width: 40%" v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="邮件内容:">
          <el-input
            style="width: 80%; font-size: 16px"
            type="textarea"
            :rows="18"
            v-model="form.content"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="send">立即发送</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-show="isshow == true" class="content_1">
      <div class="Section0" style="layout-grid: 15.6pt">
        <table
          class="MsoNormalTable"
          border="0"
          cellspacing="0"
          style="
            border-collapse: collapse;
            width: 420.75pt;
            margin-left: 4.65pt;
            mso-table-layout-alt: fixed;
            border: none;
            mso-padding-alt: 0pt 5.4pt 0pt 5.4pt;
          "
        >
          <tr style="height: 19.85pt">
            <td
              width="561"
              valign="center"
              colspan="6"
              style="
                width: 420.75pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: none;
                mso-border-bottom-alt: none;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 18pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <font face="宋体">上海华谊新材料有限公司</font>
                  </span></b
                ><b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 18pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <o:p></o:p> </span
                ></b>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="561"
              valign="center"
              colspan="6"
              style="
                width: 420.75pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <font face="宋体">面试评价表</font>
                  </span></b
                ><b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <o:p></o:p> </span
                ></b>
              </p>
            </td>
          </tr>
          <tr style="height: 22.7pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="
                  mso-pagination: widow-orphan;
                  text-align: center;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">面试时间</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="
                  mso-pagination: widow-orphan;
                  text-align: center;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <font face="宋体">　</font>
                  </span></b
                ><b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <o:p></o:p> </span
                ></b>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="
                  mso-pagination: widow-orphan;
                  text-align: center;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <font face="宋体">　</font>
                  </span></b
                ><b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <o:p></o:p> </span
                ></b>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="
                  mso-pagination: widow-orphan;
                  text-align: center;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">招聘程序</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="
                  mso-pagination: widow-orphan;
                  text-align: center;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">初试</font>&#9633; </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="
                  mso-pagination: widow-orphan;
                  text-align: center;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">复试</font>&#9633; </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 22.7pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="
                  mso-pagination: widow-orphan;
                  text-align: center;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">应聘者姓名</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="
                  mso-pagination: widow-orphan;
                  text-align: left;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <font face="宋体">　</font>
                  </span></b
                ><b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <o:p></o:p> </span
                ></b>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="
                  mso-pagination: widow-orphan;
                  text-align: left;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <font face="宋体">　</font>
                  </span></b
                ><b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <o:p></o:p> </span
                ></b>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="
                  mso-pagination: widow-orphan;
                  text-align: center;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">学历</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="
                  mso-pagination: widow-orphan;
                  text-align: left;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <font face="宋体">　</font>
                  </span></b
                ><b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <o:p></o:p> </span
                ></b>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="
                  mso-pagination: widow-orphan;
                  text-align: left;
                  line-height: 20pt;
                  mso-line-height-rule: exactly;
                "
              >
                <b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <font face="宋体">　</font>
                  </span></b
                ><b
                  ><span
                    style="
                      font-family: 宋体;
                      font-weight: bold;
                      font-size: 16pt;
                      mso-font-kerning: 0pt;
                    "
                  >
                    <o:p></o:p> </span
                ></b>
              </p>
            </td>
          </tr>
          <tr style="height: 22.7pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">应聘岗位</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="410"
              valign="center"
              colspan="5"
              style="
                width: 307.85pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: 0.5pt solid windowtext;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 22.7pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">毕业学校及专业</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="410"
              valign="center"
              colspan="5"
              style="
                width: 307.85pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: 0.5pt solid windowtext;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              rowspan="2"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double rgb(0, 0, 0);
                mso-border-bottom-alt: 0.75pt double rgb(0, 0, 0);
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">评价要素</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">好</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">较好</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">一般</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">较差</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">差</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">9-10分</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">7-8分</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">5-6分</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">3-4分</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">1-2分</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">个人修养</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">自我表现能力</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">沟通能力</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">应变能力</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">逻辑思维能力</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">求职动机</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">社交能力</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">学习成绩</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">专业知识</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">身体素质</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">合</font> 计 </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="410"
              valign="center"
              colspan="5"
              style="
                width: 307.85pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid rgb(0, 0, 0);
                mso-border-right-alt: 0.5pt solid rgb(0, 0, 0);
                border-top: none;
                mso-border-top-alt: 0.75pt double windowtext;
                border-bottom: 1pt double windowtext;
                mso-border-bottom-alt: 0.75pt double windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">分</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">性格倾向</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="77"
              valign="center"
              style="
                width: 58.3pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">内向</font> &#9633; </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">外向</font>&#9633; </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="88"
              valign="center"
              style="
                width: 66.4pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">自信</font>&#9633; </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="67"
              valign="center"
              style="
                width: 50.25pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: none;
                mso-border-right-alt: none;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">诚实</font>&#9633; </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="110"
              valign="center"
              style="
                width: 82.65pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">随和</font>&#9633; </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">综合评价</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="410"
              valign="center"
              colspan="5"
              style="
                width: 307.85pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">建议录用</font>&#9633;
                  <span style="font-family: 宋体; mso-spacerun: 'yes'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >需复试&#9633;
                  <span style="font-family: 宋体; mso-spacerun: 'yes'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >建议不录用&#9633; </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="150"
              valign="center"
              rowspan="3"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">面试重点</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="410"
              valign="center"
              colspan="5"
              style="
                width: 307.85pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: 0.5pt solid windowtext;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">企业基本情况、应聘岗位的工作要求</font>
                  <span style="font-family: 宋体; mso-spacerun: 'yes'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  > </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 16pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">&#9633;</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="410"
              valign="center"
              colspan="5"
              style="
                width: 307.85pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: 0.5pt solid windowtext;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">了解应聘者基本情况及求职动机</font>
                  <span style="font-family: 宋体; mso-spacerun: 'yes'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  > </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 16pt;
                    mso-font-kerning: 0pt;
                  "
                  ><span style="font-family: 宋体; mso-spacerun: 'yes'"
                    >&nbsp;&nbsp;</span
                  >
                  <font face="宋体">&#9633;</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 19.85pt">
            <td
              width="410"
              valign="center"
              colspan="5"
              style="
                width: 307.85pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: 0.5pt solid windowtext;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">专业知识情况</font>
                  <span style="font-family: 宋体; mso-spacerun: 'yes'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  > </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 16pt;
                    mso-font-kerning: 0pt;
                  "
                  ><span style="font-family: 宋体; mso-spacerun: 'yes'"
                    >&nbsp;</span
                  >
                  <font face="宋体">&#9633;</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 25.5pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">面试者签名</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="410"
              valign="center"
              colspan="5"
              style="
                width: 307.85pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: 0.5pt solid windowtext;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
          <tr style="height: 25.5pt">
            <td
              width="150"
              valign="center"
              style="
                width: 112.9pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: 1pt solid windowtext;
                mso-border-left-alt: 0.5pt solid windowtext;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: none;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                align="center"
                style="mso-pagination: widow-orphan; text-align: center"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">备注</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
            <td
              width="410"
              valign="center"
              colspan="5"
              style="
                width: 307.85pt;
                padding: 0pt 5.4pt 0pt 5.4pt;
                border-left: none;
                mso-border-left-alt: none;
                border-right: 1pt solid windowtext;
                mso-border-right-alt: 0.5pt solid windowtext;
                border-top: none;
                mso-border-top-alt: 0.5pt solid windowtext;
                border-bottom: 1pt solid windowtext;
                mso-border-bottom-alt: 0.5pt solid windowtext;
              "
            >
              <p
                class="MsoNormal"
                style="mso-pagination: widow-orphan; text-align: left"
              >
                <span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <font face="宋体">　</font> </span
                ><span
                  style="
                    font-family: 宋体;
                    font-size: 12pt;
                    mso-font-kerning: 0pt;
                  "
                >
                  <o:p></o:p>
                </span>
              </p>
            </td>
          </tr>
        </table>
        <p class="MsoNormal">
          <span
            style="
              mso-spacerun: 'yes';
              font-family: Calibri;
              mso-fareast-font-family: 宋体;
              mso-bidi-font-family: 'Times New Roman';
              font-size: 10.5pt;
              mso-font-kerning: 1pt;
            "
          >
            <o:p>&nbsp;</o:p>
          </span>
        </p>
      </div>
      <div>
         <el-button style="width:180px;margin-left:210px" type="primary" @click="send1">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

export default {
  prizeName: "",

  components: { Pagination },

  data() {
    return {
      form: {
        name: "",
        addressee: "",
        delivery: false,
        type: [],
        title: "",
        content: "",
      },
      value: "",
      isshow: false,
    };
  },

  watch: {},

  methods: {
    //接口已完成
    send() {
      if (!this.form.addressee) {
        this.$message({
          message: "收件人不能为空",
          type: "error",
        });
      }else if(!this.form.title){
        this.$message({
          message: "标题不能为空",
          type: "error",
        });
      }else if(!this.form.content){
        this.$message({
          message: "正文不能为空",
          type: "error",
        });
      }else{
        this.$message({
          message: "发送成功",
          type: "success",
        });
      }
    },
    send1(){
      this.$message({
          message: "提交成功",
          type: "success",
        });
    },
    show() {},
  },
  created() {},
};
</script>
<style lang='less' scoped>
.demo-form-inline {
  margin-left: 0px;
}
.searchCss {
  background: rgba(10, 171, 149, 1);
}
.main-header {
  width: 99%;
  height: 70px;
  background-color: #fff;
  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
  a {
    font-size: 20px;
    margin-left: 20px;
  }
}
.content,
.content_1 {
  width: 99%;
  // height: 700px;
  margin-top: 20px;
  margin-bottom: 70px;
}
.content_1 {
  margin-left: 450px;
}
.span_ {
  display: inline-block;
  width: 80px;
  // border: 1px solid red;
  font-size: 18px;
  text-align: right;
}
@font-face {
  font-family: "Times New Roman";
}

@font-face {
  font-family: "宋体";
}

@font-face {
  font-family: "Calibri";
}

@font-face {
  font-family: "Wingdings";
}

p.MsoNormal {
  mso-style-name: 正文;
  mso-style-parent: "";
  margin: 0pt;
  margin-bottom: 0.0001pt;
  mso-pagination: none;
  text-align: justify;
  text-justify: inter-ideograph;
  font-family: Calibri;
  mso-fareast-font-family: 宋体;
  mso-bidi-font-family: "Times New Roman";
  font-size: 10.5pt;
  mso-font-kerning: 1pt;
}

span.10 {
  font-family: 宋体;
}

span.msoIns {
  mso-style-type: export-only;
  mso-style-name: "";
  text-decoration: underline;
  text-underline: single;
  color: blue;
}

span.msoDel {
  mso-style-type: export-only;
  mso-style-name: "";
  text-decoration: line-through;
  color: red;
}

table.MsoNormalTable {
  mso-style-name: 普通表格;
  mso-style-parent: "";
  mso-style-noshow: yes;
  mso-tstyle-rowband-size: 0;
  mso-tstyle-colband-size: 0;
  mso-padding-alt: 0pt 5.4pt 0pt 5.4pt;
  mso-para-margin: 0pt;
  mso-para-margin-bottom: 0.0001pt;
  mso-pagination: widow-orphan;
  font-family: "Times New Roman";
  font-size: 10pt;
  mso-ansi-language: #0400;
  mso-fareast-language: #0400;
  mso-bidi-language: #0400;
}

@page {
  mso-page-border-surround-header: no;
  mso-page-border-surround-footer: no;
}

@page Section0 {
  margin-top: 72pt;
  margin-bottom: 72pt;
  margin-left: 90pt;
  margin-right: 90pt;
  size: 595.3pt 841.9pt;
  layout-grid: 15.6pt;
  mso-header-margin: 42.55pt;
  mso-footer-margin: 49.6pt;
}

div.Section0 {
  page: Section0;
}
</style>